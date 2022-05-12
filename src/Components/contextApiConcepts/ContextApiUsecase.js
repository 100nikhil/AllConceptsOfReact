/*

  Context provides a way to pass data through the component tree without having to pass 
  props down manually at every level.

  const MyContext = React.createContext(defaultValue);

  Creates a Context object. When React renders a component that subscribes to this Context 
  object it will read the current context value from the closest matching Provider above it 
  in the tree.

  --------------------------------------------------------------------------------------

  <MyContext.Provider value={ some_value }>
    -- components to be wrapped --
    [IMP] : these component's & their child components (whole tree) will be subscribed to 
    this context's changes
  </MyContext.Provider>

  -> Provider allows consuming components to subscribe to context changes.
  -> All consumers that are descendants of a Provider will re-render whenever the 
     Provider’s value prop changes. 
  -> Providers can be nested to override values deeper within the tree.

  ----------------------------------------------------------------------------------

  The 'contextType' property on a class can be assigned a Context object created by 
  React.createContext().

  class MyClass{
    static contextType = MyContext;
  }
          or
  MyClass.contextType = MyContext;   //contextType is static

  --> Now you can use "this.context" in class's render() method or other lifecycle methods

  --------------------------------------------------------------------------------------

  <Context.Consumer>  ---> It works only in functional compponents.

  A React component that subscribes to context changes. Using this component lets you 
  subscribe to a context within a function component.

  ex:- 

  function Content() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <UserContext.Consumer>
            {user => (
              <ProfilePage user={user} theme={theme} />
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }

  ---------------------------------------------------------------------------------

  Context.displayName

  React DevTools uses this string to determine what to display for the context.

  const MyContext = React.createContext( some_value);
  MyContext.displayName = 'MyDisplayName';

  <MyContext.Provider> // "MyDisplayName.Provider" in DevTools
  <MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

  ----------------------------------------------------------------------------------

*/
import { Component } from "react";
import StartCompo from "./app1/StartCompo";
import App2 from "./app2/App2";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./ThemedButton";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class ContextApiUsecase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div className="container mt-3">
        <div className="bg-primary">
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          <section className="mt-3">
            <ThemedButton>Themed Button</ThemedButton>
            {/* This btn has default dark theme, and we didn't passed the onClick prop as well 
              so it's theme will not be changed dynamically */}
          </section>
        </div>
        <hr />
        <StartCompo />
        <hr />
        <App2 />
      </div>
    );
  }
}

export default ContextApiUsecase;
