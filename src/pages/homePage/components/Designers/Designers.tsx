import React, { FC } from 'react'
import Card from "../../../../components/Card/Card"
import { topDesigners } from './mockData';
import * as designerTypes from "./types"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Designers: FC = (): JSX.Element => {
    const { t } = useTranslation()
    const cardTitle = (firstName: string, lastName: string): string => `${firstName} ${lastName}`
    const cardDescription = (projects: number, expertise: string): JSX.Element => (<>
        <p className='designer-projects-count'>Projects: <span>{projects}</span></p>
        <p className='designer-expertise'>Expertise: <span>{expertise}</span></p>
        <p className='designer-icons'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
        </p>
    </>)
    return <div className='designers'>
        <section className='top-designers-section'>
            <h1 className='title'>Our Top Designers</h1>
            <div className='top-designers-cards'>
                {topDesigners.map((designer: designerTypes.TopDesigner )=> <Card
                    uuid={designer.uuid}
                    image={designer.image}
                    title={cardTitle(designer.firstName, designer.lastName)}
                    description={cardDescription(designer.projects, designer.expertise)}
                    className={undefined}

                />)}
            </div>
        </section>
    </div>
}
export default Designers