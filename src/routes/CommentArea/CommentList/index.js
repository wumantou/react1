import React from 'react'
import PropTypes from 'prop-types'

class CommentList extends React.PureComponent {

  static propTypes = {
    commentList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    const comments = this.props.commentList
    return (
      <div>
        {comments.map((comment) => <Comment key={comment.is} comment={comment} />)}
      </div>
    )
  }
}

const Comment = (propValue) => (
  <div> 
    <div>用户名：{propValue.userName}</div>
    <div>评论：{propValue.content}</div>
  </div>
)

Comment.propTypes = ({
  comment: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
})

export default CommentList