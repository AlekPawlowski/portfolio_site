import MainSkils from "../../interfaces/MainSkils.interface";
import { useEffect, useState } from "react";

export default function MainTechElement({...props}) {
    const { name, maestry, color} = props.techElement;
    const delay = props.delay;

    const [percantage, setPercantage] = useState(0);

    useEffect(() => {
        requestAnimationFrame(() => {
            setTimeout(() =>{
                setPercantage(maestry);
            }, delay);
        });
      }, [percantage]);

    return <article className="main_tech_element">
        <header>
            <h4>{name}</h4>
            <p>{percantage} / 100</p>
        </header>
        <div className="main_tech_progress_bar">
            <div data-progress={maestry} style={{
                width: `${percantage}%`, 
                backgroundColor: color !== undefined ? color : 'red'
            }}></div>
        </div>
    </article>
}