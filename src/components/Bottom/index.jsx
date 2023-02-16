import React from 'react'
import CardBottom from '../CardBottom'
import './Bottom.css'
const Bottom = () => {
    return (
    <>
        <div className="BottomContainer">
            <CardBottom 
            image="./assets/features/desktop/responsive.svg"
            title="100% Responsive"
            text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            />
            <CardBottom
            image="./assets/features/desktop/no-limit.svg"
            title="No Photo Upload Limit"
            text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            />
            <CardBottom 
            image="./assets/features/desktop/embed.svg"
            title="Available to Embed"
            text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
            />
        </div>
    </>
    )
}

export default Bottom
