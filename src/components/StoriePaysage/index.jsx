import React from 'react'
import PaysageCard from '../PaysageCard'
import data from './data.json'
import './StoriePaysage.css'
const StoriePaysage = () => {
    function AllStoriePaysage(){
        const AllStoriePaysage = data.map((item) => {
            return (
                <PaysageCard
                    date = {item.Date}
                    PaysageImage={item.Image}
                    title={item.Title}
                    description={item.Author}
                    Image={item.Image}
                />
            )
        })

        return AllStoriePaysage
    }

    return (
    <>
    <div className="StoryPaysageContainer">
    <AllStoriePaysage />
    </div>
        
        
    </>
    )
}

export default StoriePaysage
