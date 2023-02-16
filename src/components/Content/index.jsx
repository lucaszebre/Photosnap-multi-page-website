import React from 'react'

import './ContentStyle.css'
import CardContent from '../CardContent'
const Content = (props) => {
    return (
    <>
    {/* "1/1/2/2" */}
        <div className="ContentContainer" style={{
            gridTemplateColumns: props.gridTemplate,
        }}>
            <CardContent 
                gridArea= {props.gridArea}
                backgroundColor= {props.backgroundColor}
                colorTitle= {props.colorTitle}
                title= {props.Title}
                description= {props.Description}
                button= {props.button}
                color= {props.ColorButton}

            />
            <div className="ContentImage" style={{
                gridArea: props.gridAreaImage,
            }}>
                <img className="ContentImageSideD"src={props.Desktop} alt="hero-image-traveller" />
                <img className="ContentImageSideT"src={props.Tablet} alt="hero-image-traveller" />
                <img className="ContentImageSideM"src={props.Mobile} alt="hero-image-traveller" />
            </div>
        </div>
    </>
    )
}

export default Content
