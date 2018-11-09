import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GlobalNav extends React.Component {
  signout(e) {
    e.preventDefault()
    this.props.dispatch(signout())
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Unity Critique</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Profile</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/signup">Signup</Link>
                {/*{ !isAuthenticated && <Link to="/signup">Signup</Link> }*/}
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/login">Login</Link>
                {/*{ !isAuthenticated && <Link to="/login">Login</Link> }
                { isAuthenticated && <a href="#">Signout</a> }*/}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return state
}

export default connect(mapStateToProps)(GlobalNav)