import React from 'react'
import  TopFeaturesImageD  from '../../assets/features/desktop/hero.jpg'
import TopFeaturesImageT  from '../../assets/features/tablet/hero.jpg'
import TopFeaturesImageM  from '../../assets/features/mobile/hero.jpg'
import './TopFeatures.css'
const TopFeatures = () => {
    return (
    <>
    <div className="TopFeaturesContainer">
        <div className="TopFeaturesLeft">
            <div className='TopfeatureContent'>
                <h1 className="TopFeaturesTitle">FEATURES</h1>
                    <p className="TopFeaturesDescription">We make sure all of our features are designed to be loved by every aspiring and even 
                        professional photograpers who wanted to share their stories.</p>
            </div>
        </div>
        <div className="TopFeaturesRight">
            <img  className="FeatureTopImageD"src={TopFeaturesImageD} alt="Image-top-feature" />
            <img  className="FeatureTopImageT"src={TopFeaturesImageT} alt="Image-top-feature" />
            <img  className="FeatureTopImageM"src={TopFeaturesImageM} alt="Image-top-feature" />
        </div>
    
</div>
    </>
    )
}

export default TopFeatures
