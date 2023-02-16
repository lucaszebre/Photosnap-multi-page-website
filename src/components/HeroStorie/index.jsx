import React from 'react'
import HeroStorieImageD from '../../assets/stories/desktop/moon-of-appalacia.jpg'
import HeroStorieImageT from '../../assets/stories/tablet/moon-of-appalacia.jpg'
import HeroStorieImageM from '../../assets/stories/mobile/moon-of-appalacia.jpg'
import './HeroStorieStyle.css'
const HeroStorie = () => {
    function Arrow() {
        return <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="white" fill-rule="evenodd" stroke="#FFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
    }
    return (
    <>
        <div className="HeroStorieContainer">
            <img  className="HeroStorieImageD"src={HeroStorieImageD} alt="Hero-Storie-Paysage" />
            <img  className="HeroStorieImageT"src={HeroStorieImageT} alt="Hero-Storie-Paysage" />
            <img  className="HeroStorieImageM"src={HeroStorieImageM} alt="Hero-Storie-Paysage" />
            <div className="HeroStorieContent">
                <div className="StorieTopText">
                    LAST MONTH'S FEATURED STORY
                </div>
                <div className="StorieCenterText">
                    HAZY FULL MOON OF APPALACHIA
                </div>
                <div className="StorieDate">
                    March 2nd 2020 <span>by John Applessed</span>
                </div>
                <div className="StorieDescription">
                    The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                </div>
                <div className="StorieRow">
                    <div className="StorieRowText">
                        READ THE STORY
                    </div>
                    <Arrow />
                </div>
            </div>
        </div>
    </>
    )
}

export default HeroStorie
