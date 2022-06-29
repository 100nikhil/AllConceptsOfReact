import {ThemeContext} from './theme-context';
import { Component } from 'react';

class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;  //this.context refer to value of nearest context provider
    console.log({...props});
    return (
      <button
        {...props}  //complete prop is passed
        style={{backgroundColor: theme.background, color: theme.foreground}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;   //setting context

export default ThemedButton;