import React from 'react'
import classes from "./OrderForm.module.css"
import Headline from '../../elements/Headline/Headline'

const OrderForm = () => {
  return (
    <>
    <Headline text="Order Form"></Headline>
    <ul className={classes.list}>
        <li className={classes.listItem}>
            <div className={classes.square}></div>
            <div className={classes.productName}>All-Natural Peanut Butter</div>
            <div className={classes.size}>220g</div>
            <div className={classes.price}>60,000 vnd</div>
            <select name="item" className={classes.dropdown} id="pb_small">
                <option value={0} className={classes.dropdownItem}>0</option>
                <option value={1} className={classes.dropdownItem}>1</option>
                <option value={2} className={classes.dropdownItem}>2</option>
                <option value={3} className={classes.dropdownItem}>3</option>
                <option value={4} className={classes.dropdownItem}>4</option>
                <option value={5} className={classes.dropdownItem}>5</option>
            </select>
        </li>
        <li className={classes.listItem}>
            <div className={classes.square}></div>
            <div className={classes.productName}>All-Natural Peanut Butter</div>
            <div className={classes.size}>380g</div>
            <div className={classes.price}>100,000 vnd</div>
            <select name="item" className={classes.dropdown} id="pb_big">
                <option value={0} className={classes.dropdownItem}>0</option>
                <option value={1} className={classes.dropdownItem}>1</option>
                <option value={2} className={classes.dropdownItem}>2</option>
                <option value={3} className={classes.dropdownItem}>3</option>
                <option value={4} className={classes.dropdownItem}>4</option>
                <option value={5} className={classes.dropdownItem}>5</option>
            </select>
        </li>
        <li className={classes.listItem}>
            <div className={classes.square}></div>
            <div className={classes.productName}>All-Natural Almond Butter</div>
            <div className={classes.size}>220g</div>
            <div className={classes.price}>125,000 vnd</div>
            <select name="item" className={classes.dropdown} id="alm_small">
                <option value={0} className={classes.dropdownItem}>0</option>
                <option value={1} className={classes.dropdownItem}>1</option>
                <option value={2} className={classes.dropdownItem}>2</option>
                <option value={3} className={classes.dropdownItem}>3</option>
                <option value={4} className={classes.dropdownItem}>4</option>
                <option value={5} className={classes.dropdownItem}>5</option>
            </select>
        </li>
        <li className={classes.listItem}>
            <div className={classes.square}></div>
            <div className={classes.productName}>All-Natural Almond Butter</div>
            <div className={classes.size}>380g</div>
            <div className={classes.price}>175,000 vnd</div>
            <select name="item" className={classes.dropdown} id="alm_big">
                <option value={0} className={classes.dropdownItem}>0</option>
                <option value={1} className={classes.dropdownItem}>1</option>
                <option value={2} className={classes.dropdownItem}>2</option>
                <option value={3} className={classes.dropdownItem}>3</option>
                <option value={4} className={classes.dropdownItem}>4</option>
                <option value={5} className={classes.dropdownItem}>5</option>
            </select>
        </li>
        <li className={classes.listItem}>
            <div className={classes.square}></div>
            <div className={classes.productName}>Cacao Almond Butter</div>
            <div className={classes.size}>220g</div>
            <div className={classes.price}>175,000 vnd</div>
            <select name="item" className={classes.dropdown} id="cacao">
                <option value={0} className={classes.dropdownItem}>0</option>
                <option value={1} className={classes.dropdownItem}>1</option>
                <option value={2} className={classes.dropdownItem}>2</option>
                <option value={3} className={classes.dropdownItem}>3</option>
                <option value={4} className={classes.dropdownItem}>4</option>
                <option value={5} className={classes.dropdownItem}>5</option>
            </select>
        </li>
    </ul>
    </>
  )
}

export default OrderForm