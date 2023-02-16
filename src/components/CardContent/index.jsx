import React from 'react'
import './CardContentStyle.css'
const CardContent = (props) => {
    return (
    <>
    <div className="CardContent" style={{gridArea: props.gridArea,
        backgroundColor: props.backgroundColor,
        }}   


        > 

                <h1 className="CardTitle" style={{
                    color: props.colorTitle,
                }}>
                    {props.title}
                </h1>
                <p className="CardDescription" style={{
                    margintop: "0.5em",
                    color: "gray",
                    lineHeight: "1.5",
                }}>
                    {props.description}

                </p>
                <div className="CardButton">
                    <div className="GetInvite"  style={{
                        marginTop: "0.5em",
                        color: props.color,
                        fontWeight: "600",
            
                        cursor: "pointer"
                        

    }}>
                        {props.button}
                    </div>
                    
                </div>
            </div>
    </>
    )
}

export default CardContent
