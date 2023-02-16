import React from 'react'
import './Beta.css'
import BetaBackGroundImageD from '../../assets/shared/desktop/bg-beta.jpg'
import BetaBackGroundImageT from '../../assets/shared/tablet/bg-beta.jpg'
import BetaBackGroundImageM from '../../assets/shared/mobile/bg-beta.jpg'
const Beta = () => {
    function Arrow() {
        return <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="white" fill-rule="evenodd" stroke="#FFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
    }
    return (
    <>
        <div className="BetaContainer">
            <img className="BetaImageD"src={BetaBackGroundImageD} alt="BetaBackGroundImage" />
            <img className='BetaImageT' src={BetaBackGroundImageT} alt="BetaBackGroundImage" />
            <img className="BetaImageM"src={BetaBackGroundImageM} alt="BetaBackGroundImage" />
            <div className="BetaWrapper">
                <div className="BetaText">
                    WE'RE IN BETA. GET YOUR INVITE TODAY!
                </div>
                <div className="BetaGetInvite">
                    <div className="Getinvite">
                        GET AN INVITE
                    </div>
                    <Arrow />
                </div>
            </div>
        </div>
    </>
    )
}

export default Beta
