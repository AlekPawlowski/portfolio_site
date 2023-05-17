import { Fragment } from "react";
import WorkElementInterface from "../../interfaces/Work.interface"
import RenderTxtBlockWithHeader from "../Components/RenderTxtBlockWithHeader.components";

export default function WorkElement({ ...props }: WorkElementInterface) {
    const { id, name, occupaction, from, to, techStack, responsibilities } = props;
    return <article className="work_element">
        <header className="work_header">
            <h4>{name}</h4>
            <h5>{occupaction}</h5>
            <h6>{from} - {to}</h6>
        </header>
        <section className="work_content">
            {techStack ? (
                <RenderTxtBlockWithHeader
                    headTag={"h5"}
                    headContent={"Tech stack:"}
                    contentContainerClassName="tech_stack_list"
                    content={techStack} />
            ) : ""}

            <RenderTxtBlockWithHeader
                headTag={"h5"}
                headContent={"Resposibilities:"}
                contentContainerClassName = "resposibilities_list"
                content={responsibilities}
            />
        </section>
    </article>
}