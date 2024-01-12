import React, { FC } from "react"
import Image from '../../../../components/Image/Image'
import { skillList as mockSkillList } from "./mockData";

interface ImproveSkillsProps {
    skillList?: string[];
}

const ImproveSkills: FC<ImproveSkillsProps> = ({ skillList }): JSX.Element => {
    const skillImgSrc ='/img/gallery/img_10.jpg'
    return <div className="improve-skill">
        <section >
            <div className="col skill-img">
                <Image imgSrc={process.env.PUBLIC_URL + skillImgSrc} title={"Photo by Unsplash"}/>
            </div>
            <div className="col skills">
                <h1 className='title'>Improve Your Design skill</h1>
                <ul className="skill-list">
                {mockSkillList.map((item, index)=><li key={index} className="skill-item">{item}</li>)}
                </ul>
                <button className='btn'>signup now</button>
            </div>
        </section>
    </div>
}

export default ImproveSkills;