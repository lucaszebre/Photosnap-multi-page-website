import React from 'react'
import './CardBottom.css'
const CardBottom = (props) => {
    return (
    <>
        <div className="CardContainer">
            <img src={props.image} alt={props.title} />
            <h1 className="CardBottomTitle">
                {props.title}
            </h1>
            <p className="CardBottomText">
                {props.text}
            </p>
        </div>
    </>
    )
}

export default CardBottom
