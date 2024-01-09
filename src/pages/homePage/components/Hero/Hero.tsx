import React, { FC } from 'react'

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
        <div className='col'>col2</div>

        </section>
    </div>
}

export default Hero;