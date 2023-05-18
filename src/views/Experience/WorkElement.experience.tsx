import { Fragment, useEffect, useState } from "react";
import WorkElementInterface from "../../interfaces/Work.interface"
import RenderTxtBlockWithHeader from "../Components/RenderTxtBlockWithHeader.components";
import AddSeparator from "../Components/AddSeparator.compoents";

export default function WorkElement({ ...props }: WorkElementInterface) {
    const { id, name, occupaction, from, to, techStack, responsibilities } = props;
    
    const separator = AddSeparator();

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
        <AddSeparator />
        
    </article>
}