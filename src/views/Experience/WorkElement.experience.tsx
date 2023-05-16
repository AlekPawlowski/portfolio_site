import WorkElementInterface from "../../interfaces/Work.interface"

export default function WorkElement({ ...props }: WorkElementInterface) {
    const {name, occupaction, from, to} = props;
    return <section className="work_element">
        <h4>{name}</h4>
    </section>
}