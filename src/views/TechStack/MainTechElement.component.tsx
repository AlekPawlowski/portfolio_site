import MainSkils from "../../interfaces/MainSkils.interface";

export default function MainTechElement({...props}) {
    const { name, maestry} = props.techElement;
    console.log(name, maestry);
    return <section className="main_tech_element">
        <h4>{name}</h4>
        <div className="main_tech_progress_bar">
            <div data-progress={maestry}></div>
        </div>
    </section>
}