import React, { FC } from 'react'

interface ImageProps{
    imgSrc?: string;
    title?: string;
    index?: number | string;
}

const Image: FC<ImageProps> = ({imgSrc, title, index}) => {
        return <div className='image'>
            <img src={process.env.PUBLIC_URL +imgSrc} alt={title && (title + index)}/>
            </div>    
}

export default Image;