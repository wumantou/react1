import React from 'react'
import PropTypes from 'prop-types'
class User extends React.PureComponent {

  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.oneOf(['male','female']).isRequired
    }).isRequired
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <span>姓名：{user.name}  </span>
        <span>年龄：{user.age}  </span>
        <span>性别：{user.gender}  </span>
      </div>
    )
  }
}

export default User