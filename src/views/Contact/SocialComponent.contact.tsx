import { FC } from "react";
import SocialElement from "../../interfaces/SocialElement.interface";

interface SocialComponentDescribe {
    socialElement: SocialElement;
}

export const SocialComponent: FC<SocialComponentDescribe> = ({ socialElement }): JSX.Element => {
    const { name, data } = socialElement,
        hrefValue = name.toLocaleLowerCase() === "email" ? `mailto:${data}` : data.toString();
    
    return <article>
        <h3>{name}</h3>
        <a href={hrefValue}>{data}</a>
    </article>
}
