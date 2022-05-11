import { Component, Fragment } from "react";
import classes from './CurrencyConverter.module.css';

class CurrencyConverter extends Component{
  constructor(){
    super();
    
    this.state = {
      counter: 0,
      amount: 0,
      currency: 'Euro',
      convertedCurrency: 0,
      flag: false
    }

  }

  incrementHandler(){
    this.setState((prevState) => {
      return { counter : prevState.counter+1 };
    })
  }

  decrementHandler(){
    this.setState((prevState) => {
      return { counter : prevState.counter-1 };
    })
  }

  welcomeHandler(w){
    alert(w+" buddy!");
  }

  clickHandler(){
    alert("I was clicked!!!");
  }

  inputHandler(e){
    console.log(e.target.name, e.target.value);
    this.setState({flag:false});
    this.setState({ [e.target.name] : e.target.value });
  }

  submitHandler(e){
    e.preventDefault();
    let a = this.state.amount;
    let c = this.state.currency;
    console.log("submitted", a, c);
    this.setState({flag: true});
    if(c==='Euro'){
      this.setState({ convertedCurrency : (a/110).toFixed(2) });
    }
    else{
      this.setState({ convertedCurrency : (a/80).toFixed(2) });
    }
  }

  render(){
    return(
      <Fragment>
        <hr/>
        <p className={classes.ccc}>{this.state.counter}</p>
        <button className="btn btn-sm btn-outline-primary" onClick={this.incrementHandler.bind(this)} >Increment</button>
        <button className="btn btn-sm btn-outline-primary" onClick={this.decrementHandler.bind(this)} >Decrement</button>
        <button className="btn btn-sm btn-outline-primary" onClick={this.welcomeHandler.bind(this, "welcome")} >Say Welcome</button>
        <button className="btn btn-sm btn-outline-primary" onClick={this.clickHandler} >Click on me</button>
        <hr/>
        <h1 style={{color: 'green'}}>Currency Converter</h1>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input name='amount' type='number' placeholder='Indian Rs.' onChange={this.inputHandler.bind(this)} required />
          <select name='currency' onChange={this.inputHandler.bind(this)}>
            <option value={'Euro'}>
              Euro
            </option>
            <option value={'US Dollars'}>
              US Dollars
            </option>
          </select>
          <button type='submit' className="btn btn-success">Submit</button>
        </form>
        {this.state.flag && (
          <h3>{this.state.currency} = {this.state.convertedCurrency}</h3>
        )
        }
      </Fragment>
    )
  }
}

export default CurrencyConverter;