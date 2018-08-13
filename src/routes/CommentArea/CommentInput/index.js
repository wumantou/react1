import React from 'react'

class CommentInput extends React.PureComponent {

  submitComment = () => {

  }

  render() {
    return (
      <div>
        用户名: <input name="userName"></input>
        内容: <input name="content"></input>
        <button onClick={this.submitComment} name="commentSubmit" type="submit" value="发表"> 发表 </button>
      </div>
    )
  }
}

export default CommentInput