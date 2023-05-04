import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import classes from './AccordionMenu.module.css'


const AccordionMenu = () => {
  return (
    <Accordion className={classes.accordion}>
      <Accordion.Item eventKey="0" className={classes.item}>
        <Accordion.Header className={classes.header}>Nutritional Facts</Accordion.Header>
        <Accordion.Body>
          <div className={classes.nutritionRow}>
            <div className={classes.category}>Serving Size:</div>
            <div className={classes.figure}>&nbsp;1 tablespoon</div>
          </div>
          <div className={classes.nutritionRow}>
            <div className={classes.category}>Calories:</div>
            <div className={classes.figure}>&nbsp;100</div>
          </div>
          <div className={classes.nutritionRow}>
            <div className={classes.category}>Total Fat:</div>
            <div className={classes.figure}>&nbsp;8 grams</div>
          </div>
          <div className={classes.nutritionRow}>
            <div className={classes.category}>Saturated Fat:</div>
            <div className={classes.figure}>&nbsp;1.3 grams</div>
          </div>
          <div className={classes.nutritionRow}>
            <div className={classes.category}>Sugar</div>
            <div className={classes.figure}>&nbsp;&lt; 1 gram</div>
          </div>
          <div className={classes.nutritionRow}>
            <div className={classes.category}>Protein</div>
            <div className={classes.figure}>&nbsp;4 grams</div>
          </div>
        </Accordion.Body>
      </Accordion.Item >
      <Accordion.Item eventKey="1" className={classes.item}>
        <Accordion.Header className={classes.header}>FAQs</Accordion.Header>
        <Accordion.Body className={classes.faqs}>
          <div className={classes.question}>Do I need to stir the product before use?</div>
          <div className={classes.answer}>It is natural for a layer of oil to rise to the top of the jar, so we recommend that you stir before enjoying Piko Nut Butters.</div>
          <div className={classes.question}>Should I refrigerate after opening?</div>
          <div className={classes.answer}>It is not necessary to refrigerate after opening, but it may help extend the shelf life of the nut butter.</div>
          <div className={classes.question}>How do I return Piko's jars and receive the discount?</div>
          <div className={classes.answer}>In order to return your jar and receieve a discount, place your order on Forms.App and fill out the discount field.</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionMenu