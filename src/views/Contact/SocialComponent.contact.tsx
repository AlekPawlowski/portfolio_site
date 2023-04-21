import { FC } from "react";
import SocialElement from "../../interfaces/SocialElement.interface";

interface SocialComponentDescribe {
    socialElement: SocialElement;
}

export const SocialComponent: FC<SocialComponentDescribe> = ({ socialElement }): JSX.Element => {
    const { name, data } = socialElement;
    if (typeof data === "number") {

    }
    return <article>
        <h3>{name}</h3>
        <a href={data.toString()}>{data}</a>
    </article>
}
