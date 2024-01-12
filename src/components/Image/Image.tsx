import React, { FC } from 'react'

interface ImageProps{
    imgSrc: string;
    title: string;
}

const Image: FC<ImageProps> = ({imgSrc, title}) => {
        return <div className='image'>
            <img src={process.env.PUBLIC_URL +imgSrc} alt={title}/>
            </div>    
}

export default Image;