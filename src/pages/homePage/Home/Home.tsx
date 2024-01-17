import React, { FC } from 'react'
import Hero from '../components/Hero/Hero'
import ImproveSkills from '../components/ImproveSkills/ImproveSkills'
import Quote from '../components/Quote/Quote'
import Chiefs from '../components/Chiefs/Chiefs'

const Home :FC=()=>{
    return <div>
        <Hero/>
        <ImproveSkills/>
        <Quote/>
        <Chiefs/>
    </div>
}

export default Home;