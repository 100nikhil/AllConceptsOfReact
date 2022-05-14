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
    getDerivedStateFromProps()
    render()
    componentDidMount()

  Updating:
    
    The next phase in the lifecycle is when a component is updated.

    A component is updated whenever there is a change in the component's state or props.

    React has five built-in methods that gets called, in this order, when a component is 
    updated:

    getDerivedStateFromProps()
    shouldComponentUpdate()
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

  constructor(props){
    super(props);
    this.state = {
      villain: 'loki'
    }
    this.hero = 'Hulk';
    console.log('Inside the constructor');
  }

  componentDidMount(){
    console.log('Inside ComponentDidMount');
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