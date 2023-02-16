import React from 'react'
import './BigCardPricingstyles.css'
const BigCardPricing = (props) => {
    return (
    <>
        <div className="BigPricingContainer">
            <h1 className="BigPricingLevel">
                {props.level}
            </h1>
            <p className="BigPricingDescription">
                {props.description}
            </p>
            <div className="BigPricing">
                {props.price}
            </div>
            <div className="BigPricingDuring">
                {props.during}
            </div>
            <button className="BigPickPlan">
                PICK PLAN
            </button>
        </div>
    </>
    )
}

export default BigCardPricing
