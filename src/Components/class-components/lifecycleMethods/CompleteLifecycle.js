/*
  Three most important lifecycle methods are :-
  
    ComponentDidMount,
    ComponentDidUpdate,
    ComponentWillUnmount

    ---- 3 phases of a react component are --- 
      Mounting    -> ComponentDidMount()     /called after component is mounted
      Updating    -> ComponentDidUpdate()    /called after component is updated
      Unmounting  -> ComponentWillUnmount()  /Called right before unmounting (clean up operations)


  Mounting: 
  
    Mounting means putting elements into the DOM.

    React has four built-in methods that gets called, in this order, when mounting a 
    component:

    constructor()
    getDerivedStateFromProps() - static method
    render()
    componentDidMount()

  Updating:
    
    The next phase in the lifecycle is when a component is updated.

    A component is updated whenever there is a change in the component's state or props.

    React has five built-in methods that gets called, in this order, when a component is 
    updated:

    getDerivedStateFromProps()
    shouldComponentUpdate()     - return true or false [if return false prevent rendering]
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

  
  Unmounting:

    The next phase in the lifecycle is when a component is removed from the DOM, or 
    unmounting as React likes to call it.

    React has only one built-in method that gets called when a component is unmounted:

    componentWillUnmount()

*/

import { Component } from "react";

class CompleteLifecycle extends Component{

  superHero = 'Superman';

  //constructor called first when component mounted
  constructor(props){
    super(props);
    this.state = {
      villain: 'loki'
    }
    this.hero = 'Hulk';
    console.log('Inside the constructor');
  }

  /*
    getDerivedStateFromProps() called right after constructor & right before rendering 
    during Mounting...
    and called first during Updating... phase 
  */
  static getDerivedStateFromProps(props){
    console.log('Inside getDerivedStateFromProps()');
    // return { villain: props.villain }
    //can update state using props
  }

  componentDidMount(){
    console.log('Inside ComponentDidMount');
  }

  //Called right after getDerivedStateFromProps() and right before render() during Updating...
  shouldComponentUpdate(nextProps, nextState){
    console.log('Inside shouldComponentUpdate()');
    console.log('Updated new state is: ',nextState);
    console.log('Updated new props is: ',nextProps);
    return true;
  }

  /*
    called right after render() during Updating...
    In the getSnapshotBeforeUpdate() method you have access to the props and state before 
    the update, meaning that even after the update, you can check what the values were 
    before the update.
  */  
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Inside getSnapshotBeforeUpdate()');
    console.log(prevState);
    console.log(prevProps);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Inside ComponentDidUpdate');
    console.log('New state is : ', this.state);
    console.log('Previous state was : ', prevState);
    console.log('New props is : ', this.props);
    console.log('Previous props was : ', prevProps);
  }

  componentWillUnmount(){
    console.log('Inside ComponentWillUnmount');
  }

  changeVillain(){
    this.setState({villain:'Thanos'});
  }

  render(){
    console.log('Inside render...');
    return(
      <div style={{padding: '2rem', border: '2px solid blue', borderRadius:'10px'}}>
        <p>Three main lifecycle methods.</p>
        <h6 style={{color:'red'}}>{this.props.msg}</h6>
        <h6>Hero is : {this.hero}</h6>
        <h6>SuperHero is : {this.superHero}</h6>
        <h6>Villain is : {this.state.villain}</h6>
        <button onClick={this.changeVillain.bind(this)}>Update state</button>
      </div>
    )
  }

}

export default CompleteLifecycle;