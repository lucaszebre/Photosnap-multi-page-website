import React from 'react'
import CardBottom from '../CardBottom'
import './SecondBottom.css'
const SecondBottom = () => {
    return (
    <>
    <div className="SecondBottomDiv">

    <div className="SecondBottomContainer">
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
            <CardBottom 
            image="./assets/features/desktop/custom-domain.svg"
            title="Custom Domain"
            text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            />
            <CardBottom
            image="./assets/features/desktop/boost-exposure.svg"
            title="Boost Your Exposure"
            text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            />
            <CardBottom 
            image="./assets/features/desktop/drag-drop.svg"
            title="Drag & Drop Image"
            text="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            />
        </div>

    </div>
        
    </>
    )
}

export default SecondBottom