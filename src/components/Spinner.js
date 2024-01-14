import React, { Component } from 'react'
import skate from '/home/aviraj/Documents/vscode/news/news/src/components/skate.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={skate} alt="loading" />
      </div>
    )
  }
}

