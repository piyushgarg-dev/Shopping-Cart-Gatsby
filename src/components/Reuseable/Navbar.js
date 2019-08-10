import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse show",
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar bg-theme navbar-expand-sm text-white ">
        <Link to="/" className="navbar-brand ml-5">
          <img src={Logo} width="40px" />
        </Link>
        <button
        onClick={this.myToggler}
         className="navbar-toggler" type="button">
          <span className="text-white">Menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
