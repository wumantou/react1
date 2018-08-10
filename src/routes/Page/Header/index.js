import React from 'react'

class Header extends React.Component {

  printAfterClick(e){
    console.log(this)
    console.log(e.target.innerHTML)
  }

  render() {
    return (
      <div onClick={this.printAfterClick.bind(this)}>
            this is new header!
      </div>
    )
  }
}

export default Header