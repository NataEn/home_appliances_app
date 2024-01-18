import React, { FC } from 'react'
import Image from "../../../../components/Image/Image"
import {ImageList} from "./mockData"
import { useTranslation } from 'react-i18next';

const Hero :FC=():JSX.Element=>{
    const {t}=useTranslation()
    return <div className='hero'>
        <section>
        <div className='col'>
            <h1 className='title'>{t('whoAreWe')}</h1>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            incididunt ut duis aute irure. Ut enim ad incididunt ut.</p>
            <button className='btn'>explore now</button>
        </div>
        <div className='col gallery'>
            {ImageList.map(((img, index)=>(
            <Image imgSrc={process.env.PUBLIC_URL + img.src} title={img.alt} key={img.alt} index={index}/>
            )))}
        </div>
        </section>
    </div>
}

export default Hero;