import React from 'react'
import './CardPricingstyles.css'
const CardPricing = (props) => {
    return (
    <>
        <div className="PricingContainer">
            <h1 className="PricingLevel">
                {props.level}
            </h1>
            <p className="PricingDescription">
                {props.description}
            </p>
            <div className="Pricing">
                {props.price}
            </div>
            <div className="PricingDuring">
                {props.during}
            </div>
            <button className="PickPlan">
                PICK PLAN
            </button>
        </div>
    </>
    )
}

export default CardPricing
