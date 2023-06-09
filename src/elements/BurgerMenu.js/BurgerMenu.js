import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from "./BurgerMenu.module.css"
import { useNavigate } from 'react-router-dom';




const BurgerMenu = () => {

  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = (e) => {
    setIsOpen(false)

    if (e.target.id === "products") { 
      navigate.push('/products')
    } else if (e.target.id === "stores") { 
      navigate.push('/stores');
    } 
      
  }

  const handleOnOpen = () => { 
    console.log("blah")
  }

  const styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '26px',
      height: '20px',
      right: '36px',
      top: '93px'
    },
    bmBurgerBars: {
      background: '#121212'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: '0px',
      height: '100%'
    },
    bmMenu: {
      background: '#ffffff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      boxShadow: '0 5px 5px rgba(0,0,0,.2)',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#121212',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'column'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }, 
    bmCrossButton: {
      height: '90px',
      width: '30px'
    },
    bmCross: {
      background: '#121212'
    },
  }

  return (
    <Menu
      right
      isOpen={isOpen}
      styles={styles}
    >
      <Link id="products" to="/" onClick={closeMenu} className={classes.menuItem}>Products</Link>
      <Link  id="stores" to="/stores" onClick={closeMenu} className={classes.menuItem}>Find in Stores</Link>
      <a id="shopee" className={classes.menuItem} onClick={closeMenu} href="https://shopee.vn/piko.nutbutters" target="_blank" rel='noreferrer'>Order on Shopee</a>
      <a id="forms" className={classes.menuItem}  onClick={closeMenu} href="https://online.forms.app/pikobutters/order-form" target="_blank" rel="noreferrer">Order on Forms.App</a>
      
    </Menu>
  )
}

export default BurgerMenu;