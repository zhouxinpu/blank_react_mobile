import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'

@connect((state)=>({num:state.user.num}),null)
class User extends Component {
  render() {
    return (
      <div>
        {this.props.num}
        <Button type="primary">点击按钮</Button>
      </div>
    )
  }
}

export default User