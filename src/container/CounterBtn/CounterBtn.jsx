import React, { Component } from 'react'

class CounterBtn extends Component {
  state = {
    numberCount: 1,
  }

  counterBtnChange = (val) => {
    this.props.onCounterChange(val)
  }

  addNum = () => {
    this.setState(
      {
        numberCount: this.state.numberCount + 1,
      },
      () => {
        this.counterBtnChange(this.state.numberCount)
      }
    )
  }

  decNum = () => {
    if (this.state.numberCount > 0) {
      this.setState(
        {
          numberCount: this.state.numberCount - 1,
        },
        () => {
          this.counterBtnChange(this.state.numberCount)
        }
      )
    }
  }

  render() {
    return (
      <div className='counter-btn-container'>
        <button className='counter-btn' onClick={this.decNum}>
          -
        </button>
        <input type='text' value={this.state.numberCount} />
        <button className='counter-btn' onClick={this.addNum}>
          +
        </button>
      </div>
    )
  }
}

export default CounterBtn
