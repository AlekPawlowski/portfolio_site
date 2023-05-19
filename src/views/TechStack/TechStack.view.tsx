import MainSkils from "../../interfaces/MainSkils.interface";
import MainTechElement from "./MainTechElement.component";
import configuration from "../config";

import './techstack.style.scss';
import RenderTxtBlockWithHeader from "../Components/RenderTxtBlockWithHeader.components";
import AddSeparator from "../Components/AddSeparator.compoents";

const mainSkils: MainSkils[] = [
    {
        id: 1,
        name: "JavaScript",
        maestry: 80,
        color: "#f7df1e",
    },
    {
        id: 2,
        name: "Typescript",
        maestry: 55,
        color: "#3178C8",
    },
    {
        id: 3,
        name: "CSS ( SCSS / Less )",
        maestry: 80,
        color: "#bf4081",
    },
    {
        id: 4,
        name: "HTML",
        maestry: 80,
        color: "#e34c25",
    },
    {
        id: 5,
        name: "Front-end",
        maestry: 65,
        color: "#e34c25",
    },
    {
        id: 6,
        name: "React",
        maestry: 20,
        color: "#61dbfc",
    },
    {
        id: 7,
        name: "Gulp",
        maestry: 50,
        color: "#DB4445",
    },
    {
        id: 8,
        name: "JQuery",
        maestry: 55,
        color: "#0769aC",
    },
    {
        id: 9,
        name: "Cypress",
        maestry: 30,
    },
    {
        id: 10,
        name: "Jest js",
        maestry: 30,
        color: "#C63D14",
    }
]

const additionalSkills: string[] = ["REST", "EcmaScript 2015+ (ES6)", "Jira", "Responsive web design (RWD)", "Nunjucks", "Git", "Adobe Photoshop/Ilustrator/XD", "SEO", "Accessibility", "Unit Test",  "Object oriented programing (OOP)", "Functional programing (FP)", "SOLID/DRY/KISS", "Agile",];

export default function TechStack() {
    const { techStackBarDely } = configuration;

    return (
        <section className="content_element">
            <h1>Tech stack:</h1>
            <h3>Main skills:</h3>
            <section id="main_skils" className="flex_content">
                <AddSeparator />
                {mainSkils.map((element: MainSkils, index): JSX.Element => {
                    const { id, name, maestry } = element;
                    const delay = index * techStackBarDely;
                    return <MainTechElement key={id} techElement={element} delay={delay} />
                })}
            </section>
            <RenderTxtBlockWithHeader 
                headTag={"h3"}
                headContent={"Additional skills"}
                contentContainerClassName={"additional_skils flex_content"}
                content={additionalSkills}
            />
        </section>
    );
}