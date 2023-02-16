import React from 'react'
import  HeroPricingImageD  from '../../assets/pricing/desktop/hero.jpg'
import HeroPricingImageT  from '../../assets/pricing/tablet/hero.jpg'
import HeroPricingImageM  from '../../assets/pricing/mobile/hero.jpg'
import './HeroPricing.css'
const HeroPricing = () => {
    return (
    <>
    <div className="HeroPricingContainer">
        <div className="HeroPricingLeft">
            <div className='HeroPricingContent'>
                <h1 className="HeroPricingTitle">PRICING</h1>
                    <p className="HeroPricingDescription">Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                    </div>
        </div>
        <div className="HeroPricingRight">
            <img  className="HeroPricingImageD"src={HeroPricingImageD} alt="Image-top-feature" />
            <img  className="HeroPricingImageT"src={HeroPricingImageT} alt="Image-top-feature" />
            <img  className="HeroPricingImageM"src={HeroPricingImageM} alt="Image-top-feature" />
        </div>
    
</div>
    </>
    )
}

export default HeroPricing