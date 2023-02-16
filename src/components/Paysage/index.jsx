import React from 'react'
import Paysage1 from '../../assets/stories/desktop/mountains.jpg'
import Paysage2 from '../../assets/stories/desktop/cityscapes.jpg'
import Paysage3 from '../../assets/stories/desktop/18-days-voyage.jpg'
import Paysage4 from '../../assets/stories/desktop/architecturals.jpg'
import PaysageCard from '../PaysageCard'
import './Paysage.css'
const Paysage = () => {
    return (
    <>
        <div className="PaysageContainer">
            <PaysageCard
                PaysageImage={Paysage1}
                title="The Mountains"
                description="by John Appleseed"
            />
            <PaysageCard
                PaysageImage={Paysage2}
                title="Sunset Cityscapes"
                description="by Benjamin Cruz"
            />
            <PaysageCard
                PaysageImage={Paysage3}
                title="18 Days Voyage"
                description="by Alexei Borodin"
            />
            <PaysageCard
                PaysageImage={Paysage4}
                title="Architecturals"
                description="by Samantha Brooke"
            />
        </div>
    </>
    )
}

export default Paysage
