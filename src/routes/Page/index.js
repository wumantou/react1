import React from 'react'

import Header from './Header/index'
import Main from './Main/index'
import Footer from './Footer/index'

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Page