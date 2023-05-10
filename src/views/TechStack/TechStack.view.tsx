import MainSkils from "../../interfaces/MainSkils.interface";
import MainTechElement from "./MainTechElement.component";

const mainSkils: MainSkils[] = [
    {
        id: 1,
        name: "JavaScript",
        maestry: 80,
    },
    {
        id: 2,
        name: "Typescript",
        maestry: 55
    },
    {
        id: 3,
        name: "CSS ( SCSS / Less )",
        maestry: 80
    },
    {
        id: 4,
        name: "HTML",
        maestry: 80
    },
    {
        id: 5,
        name: "Front-end",
        maestry: 65
    },
    {
        id: 6,
        name: "React",
        maestry: 20
    },
    {
        id: 7,
        name: "Gulp",
        maestry: 50
    },
    {
        id: 8,
        name: "JQuery",
        maestry: 55
    },
    {
        id: 9,
        name: "Cypress",
        maestry: 30
    },
    {
        id: 10,
        name: "Jest js",
        maestry: 30
    }
]

const additionalSkils: string[] = ["REST", "ES6", "Jira", "RWD", "Nunjucks", "Git", "Adobe Photoshop/Ilustrator/XD", "SEO", "Accessibility", "Unit Test", "Agile", "OOP", "TDD", "FP"];

export default function TechStack() {
    return <section className="content_element">
        <h2>Tech stack</h2>
        <h3>Main skills:</h3>
        {mainSkils.map((element: MainSkils, index): JSX.Element => {
            const { id, name, maestry } = element;
            return <MainTechElement key={id} techElement={element} />
        })}
        <h3>More abilities:</h3>
    </section>
}