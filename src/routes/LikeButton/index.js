import React from 'react'

import PropTypes from 'prop-types'

class LikeButton extends React.Component {
  static defaultProps = {
    goodButton: '点赞',
    badButton:'取消'
  }

  static propTypes = {
    goodButton: PropTypes.string,
    badButton: PropTypes.string
  }
  constructor() {
    super()
    this.state = { isLikeButton:true }
  }

  changeLikeButton = () => {
    console.log(this.state.isLikeButton)
    this.setState(() => { return { isLikeButton : !this.state.isLikeButton, count:0 } })
    console.log(this.state.isLikeButton)
    this.setState(() => { return { count: this.state.count + 1 } })
    console.log(this.state.count)
  }
  render() {
    return (
      <button className="like-button" onClick={this.changeLikeButton}>
        <span className="like-text" >{ this.state.isLikeButton?this.props.goodButton:this.props.badButton }</span>
        <span role="img" aria-label="good">👍</span>
      </button>
    )
  }
}

export default LikeButton