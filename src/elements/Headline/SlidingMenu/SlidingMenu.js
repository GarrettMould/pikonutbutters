import React from 'react'
import classes from "./SlidingMenu.module.css"
import { slide as Menu } from 'react-burger-menu'

const SlidingMenu = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  )
}

export default SlidingMenu