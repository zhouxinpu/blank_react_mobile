import React, { Component } from 'react'
import {connect} from 'react-redux'

@connect((state)=>({stock:state.goods.stock}),null)
class Goods extends Component {
  render() {
    return (
      <div>
        {this.props.stock}
      </div>
    )
  }
}

export default Goods