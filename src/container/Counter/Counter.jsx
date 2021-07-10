import React, { Component, Fragment } from 'react'
import './Counter.css'
import CounterBtn from '../CounterBtn/CounterBtn'

class Counter extends Component {
  state = {
    numberCount: 1,
  }

  counterDisplayChange = (val) => {
    this.setState({
      numberCount: val,
    })
  }

  render() {
    return (
      <Fragment>
        <div className='counter-container'>
          <div className='counter-display'>
            <h1>My Simple Counter</h1>
            <p>Number count:</p>
            <p>{this.state.numberCount}</p>
          </div>
          <CounterBtn onCounterChange={(val) => this.counterDisplayChange(val)} />
        </div>
      </Fragment>
    )
  }
}

export default Counter
