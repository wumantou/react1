import React from 'react'
import LikeButton from './../../LikeButton/index'
import PropTypes from 'prop-types'
// import User from './User/index'

class Main extends React.Component {

  constructor() {
    super()
    this.state = { defaultButton:true, goodButton:'good', badButton:'bad' }
  }

  changeButtonText = () => {
    this.setState({ defaultButton : !this.state.defaultButton, 
      goodButton:this.state.defaultButton?'good':'GOOD', badButton:this.state.defaultButton?'bad':'BAD' })
  }

  render() {
    const users = [
      { id:1, name:'first', age: 20, gender:'male' },
      { id:2, name:'second', age: 21, gender:'male' },
      { id:3, name:'next', age: 22, gender:'famale' },
      { id:4, name:'finally', age: 23, gender:'famale' }
    ]
    
    return (
      <div>
        <div onClick={ this.changeButtonText }>
          change button text!
        </div>
        <LikeButton goodButton={this.state.goodButton} badButton={this.state.badButton} />

        {users.map((user) => <InnerUser key={user.id} user={user} />)}

      </div>
    )
  }
}

const InnerUser = (propsValue) => (
  <div>
    <span>姓名：{propsValue.user.name}  </span>
    <span>年龄：{propsValue.user.age}  </span>
    <span>性别：{propsValue.user.gender}  </span>
  </div>
)

InnerUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['male','female']).isRequired
  }).isRequired
}

export default Main