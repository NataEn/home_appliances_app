import React, { FC } from 'react'
import Hero from '../components/Hero/Hero'
import ImproveSkills from '../components/ImproveSkills/ImproveSkills'
import Quote from '../components/Quote/Quote'

const Home :FC=()=>{
    return <div>
        <Hero/>
        <ImproveSkills/>
        <Quote/>
    </div>
}

export default Home;