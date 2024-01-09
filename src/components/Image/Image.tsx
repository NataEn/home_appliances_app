import React, { FC } from 'react'

interface ImageProps{
    src: string;
    pt: string;
    title: string;
}

const Image: FC<ImageProps> = ({src, pt, title}) => {
        return <div className='image' style={{paddingTop:pt}}>
            {title}
            </div>    
}

export default Image;