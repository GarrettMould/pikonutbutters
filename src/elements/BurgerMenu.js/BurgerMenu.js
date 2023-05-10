import { slide as Menu } from 'react-burger-menu'
import menu from '../../images/menu.svg'
import classes from "./BurgerMenu.module.css"
import piko_alt from "../../images/piko_alt.svg"

const BurgerMenu = () =>  {
  
  const handleOnOpen = () => { 
    console.log("blah")
  }

  const CustomBurgerIcon = () => {
  return (
    <img
      src={menu}
      alt="Burger Icon"
      style={{ width: 24, height: 24 }}
    />
  );
};

var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '40px',
        height: '34px',
        right: '36px',
        top: '67px'
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
        height: '30px',
        width: '30px'
      },
      bmCross: {
        background: '#121212'
      },
  }
  
  

    return (
      <Menu 
        right 
        disableAutoFocus
        styles={styles}
        customBurgerIcon={<CustomBurgerIcon />}
        width={ '60%' }>
        <a id="home" className={classes.menuItem} href="/">Products</a>
        <a id="home" className={classes.menuItem} href="/stores">Stores</a>
        <a id="about" className={classes.menuItem} href="https://shopee.vn/piko.nutbutters" target="_blank" rel="noreferrer">Order on Shopee</a>
        <a id="about" className={classes.menuItem} href="https://online.forms.app/pikobutters/order-form" target="_blank" rel="noreferrer">Order on Forms.App</a>
        
      </Menu>
    );
  }


export default BurgerMenu;