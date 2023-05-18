import { Fragment, useEffect, useState } from "react";
import WorkElementInterface from "../../interfaces/Work.interface"
import RenderTxtBlockWithHeader from "../Components/RenderTxtBlockWithHeader.components";

export default function WorkElement({ ...props }: WorkElementInterface) {
    const { id, name, occupaction, from, to, techStack, responsibilities } = props;
    const [animationClass, setAminationClass] = useState("start_work_separator");
    useEffect(() => {
        setTimeout(() => {
            setAminationClass('work_separator')
        }, 1000);
    }, [])
    return <article className="work_element">

        <header className="work_header">
            <h3>{name}</h3>
            <h4>{occupaction}</h4>
            <h5>{from} - {to}</h5>
        </header>
        <section className="work_content">
            {techStack ? (
                <RenderTxtBlockWithHeader
                    headTag={"h6"}
                    headContent={"Tech stack:"}
                    contentContainerClassName="tech_stack_list"
                    content={techStack} />
            ) : ""}

            <RenderTxtBlockWithHeader
                headTag={"h6"}
                headContent={"Resposibilities:"}
                contentContainerClassName = "resposibilities_list"
                content={responsibilities}
            />
        </section>
        <div className={animationClass}>
            <div className="left_dot dot"></div>
            <div className="right_dot dot"></div>
            <div className="left_bracket bracket"></div>
            <div className="right_bracket bracket"></div>
        </div>
    </article>
}