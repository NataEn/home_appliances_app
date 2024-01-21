import React, { FC } from "react";
import sections from "./sections.json"

interface FooterProps {
}
interface InnerSection {
    title: string,
    content: string | string[]
}

const Footer: FC<FooterProps> = () => {

    const innerSection = (section: InnerSection) => {
        return (
            <div className="inner-section">
                <h4 className="inner-section-title">{section.title}</h4>
                <p className="inner-section-info">
                    {!Array.isArray(section.content) ? section.content : section.content.map((item) => <li>{item}</li>)}
                </p>
            </div>
        )
    }

    return <div className="footer container">
        <div>
            {sections.map(section => innerSection(section))}
        </div>
        <p className="copyright">&copy; 2024 | All Rights Reserved</p>
    </div>
}



export default Footer;