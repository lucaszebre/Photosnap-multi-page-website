import React from 'react'
import Content from '../Content'
const AllContent = () => {
    return (
    <>
        <Content 
            gridArea= "1/1/2/2"
            backgroundColor= "black"
            Title= "CREATE AND SHARE YOUR PHOTO STORIES."
            Description= "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
            button= "Get an invite"
            ColorButton= "white"
            colorTitle= "white"
            Desktop= "./assets/home/desktop/create-and-share.jpg"
            Tablet= ".assets/home/tablet/create-and-share.jpg"
            Mobile= ".assets/home/mobile/create-and-share.jpg"
            gridTemplate=" 0.70fr 1fr"

        />
        <Content
            gridTemplate="  1fr 0.70fr"
            gridArea= "1 / 2 / 2 / 3"
            gridAreaImage= "1 / 1 / 2 / 2"
            backgroundColor= "white"
            Title= "BEAUTIFUL STORIES EVERY TIME"
            Description= "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
            button= "View the stories"
            ColorButton= "black"
            Desktop= "./assets/home/desktop/beautiful-stories.jpg"
            Tablet= "./assets/home/tablet/beautiful-stories.jpg"
            Mobile= "./assets/home/mobile/beautiful-stories.jpg"
            colorTitle= "black"
        />
        <Content
            gridTemplate="  0.70fr 1fr"
            gridArea= "1/1/2/2"
            backgroundColor= "black"
            Title= "DESIGNED FOR EVERYONE"
            Description= "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
            button= "View the stories"
            ColorButton= "white"
            Desktop= "./assets/home/desktop/designed-for-everyone.jpg"
            Tablet= "./assets/home/tablet/designed-for-everyone.jpg"
            Mobile= "./assets/home/mobile/designed-for-everyone.jpg"
            colorTitle= "white"
        />


    </>
    )
}

export default AllContent
