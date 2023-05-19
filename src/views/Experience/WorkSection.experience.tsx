import { useState, useEffect } from "react"
import WorkElement from "./WorkElement.experience";
import WorkElementInterface from "../../interfaces/Work.interface";

export default function WorkSection(): JSX.Element {
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('public/experience.json')
                .then(data => data.json())
            setWorkExperience(data);
        };
        fetchData();
    }, [])

    return <section className="work_section">
        <h2>Where I’ve worked:</h2>
        { Object.keys(workExperience).reverse().map((element, index) => {
            const workElement: WorkElementInterface = workExperience[element as any];
            return <WorkElement key={workElement.id} {...workElement} />
        })}
    </section>
}