import React, { FC } from 'react'
import Card from "../../../../components/Card/Card"
import { topDesigners } from './mockData';
import { useTranslation } from 'react-i18next';

const Designers: FC = (): JSX.Element => {
    const { t } = useTranslation()
    const cardTitle = (firstName: string, lastName: string): string => `${firstName} ${lastName}`
    const cardDescription = (projects: number, expertise: string): JSX.Element => (<div>
        <p className='designer-projects-count'>Projects: <span>{projects}</span></p>
        <p className='designer-expertise'>Expertise: <span>{expertise}</span></p>
        <div className='designer-media'></div>
    </div>)
    return <div className='designers'>
        <section className='top-designers-section'>
            <h1 className='title'>Our Top Designers</h1>
            <div className='top-designers-cards'> 
                {topDesigners.map(designer => <Card
                    uuid={designer.uuid}
                    image={designer.image}
                    title={cardTitle(designer.firstName, designer.lastName)}
                    description={cardDescription(designer.projects, designer.expertise)}

                />)}
            </div>
        </section>
    </div>
}
export default Designers