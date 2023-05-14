import { useState, useEffect } from "react"

export default function WorkSection(): JSX.Element {
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('src/data/experience.json')
                .then(data => data.json())
            setWorkExperience(data);
        };
        fetchData();
    }, [])
    return <section>
        <h2>Where I’ve Worked:</h2>
        { Object.keys(workExperience).map((element, index) => {
            const dat = workExperience[element as any];
            return <div key={element}>element </div>
        })}
    </section>
}