import React, { FC } from 'react'

interface ImageProps{
    imgSrc: string;
    pt: string;
    title: string;
}

const Image: FC<ImageProps> = ({imgSrc, pt, title}) => {
        return <div className='image' style={{paddingTop:pt}}>
            <img src={process.env.PUBLIC_URL +imgSrc} alt={title}/>
            </div>    
}

export default Image;