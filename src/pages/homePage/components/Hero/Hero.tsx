import React, { FC } from 'react'
import Image from "../../../../components/Image/Image"
import {ImageList} from "./mockData"

const Hero :FC=()=>{
    return <div className='hero'>
        <section>
        <div className='col'>
            <h1 className='title'>What Are We About</h1>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            incididunt ut duis aute irure.</p>
            <button className='btn'>explore now</button>
        </div>
        <div className='col gallery'>
            {ImageList.map((img=>(
            <Image imgSrc={process.env.PUBLIC_URL + img.src} pt={"85%"} title={img.name} key={img.name}/>
            )))}
        </div>
        </section>
    </div>
}

export default Hero;