import React from 'react'
import './PaysageCard.css'
const PaysageCard = (props) => {
    function Fleche(){
        return <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="white" fill-rule="evenodd" stroke="#ffff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
    }
    return (
    <>
        <div className="PaysageCardContainer">
            <img src={props.PaysageImage} alt={props.title} className="PaysageImage" />
            <div className="PaysageWrapper">
                <div className="PaysageContent">
                    <div className="PaysageBlockContent">
                        <div className="PaysageTopTitle">
                            {props.date}
                        </div>
                        <h1 className="PaysageTitle">
                            {props.title}
                        </h1>
                        <p className="PaysageDescription">
                            {props.description}
                        </p>
                    </div>
                    <div className="PaysageWrap">
                        <div className="PaysageReadStory">
                            READ STORY
                        </div>
                        <div className="PaysageImg">
                            <Fleche />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default PaysageCard
