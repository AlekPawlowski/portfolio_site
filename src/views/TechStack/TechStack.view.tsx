import MainSkils from "../../interfaces/MainSkils.interface";
import MainTechElement from "./MainTechElement.component";
import configuration from "../config";

import './techstack.style.scss';
import RenderTxtBlockWithHeader from "../Components/RenderTxtBlockWithHeader.components";
import AddSeparator from "../Components/AddSeparator.compoents";

const mainSkils: string[] = ["JavaScript", "Typescript", "CSS ( SCSS / Less )", "HTML", "React", "JQuery", "Cypress", "Jest.js", "Next.js"]

const additionalSkills: string[] = ["Redux", "Axios", "Context Api", "CI/CD", "REST", "EcmaScript 2015+ (ES6)", "Jira", "Responsive web design (RWD)", "Nunjucks", "Git",  "Gulp", "Vite", "Adobe Photoshop/Ilustrator/XD", "SEO", "Accessibility", "Unit Test", "Object oriented programing (OOP)", "Functional programing (FP)", "SOLID/DRY/KISS", "Agile",];

export default function TechStack() {
    const { techStackBarDely } = configuration;

    return (
        <section className="content_element">
            <h1>Tech stack:</h1>
            <RenderTxtBlockWithHeader
                headTag={"h3"}
                headContent="Main skills"
                contentContainerClassName={"additional_skils flex_content"}
                content={mainSkils}
            />
            <RenderTxtBlockWithHeader
                headTag={"h3"}
                headContent={"Additional skills"}
                contentContainerClassName={"additional_skils flex_content"}
                content={additionalSkills}
            />
        </section>
    );
}