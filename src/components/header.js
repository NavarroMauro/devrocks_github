import { Link } from "gatsby"
import React from "react"
import DevRocksLogo from "../images/joelogo_s_plain.svg"

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={DevRocksLogo} alt="devrocks_logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header
