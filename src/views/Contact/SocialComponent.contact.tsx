import { FC } from "react";
import SocialElement from "../../interfaces/SocialElement.interface";

interface SocialComponentDescribe {
    socialElement: SocialElement;
}

export const SocialComponent: FC<SocialComponentDescribe> = ({ socialElement }): JSX.Element => {
    const { name, data } = socialElement,
        hrefValue = name.toLocaleLowerCase() === "email" ? `mailto:${data}` : data.toString();
    
    return <article>
        <a href={hrefValue} target="_blank">
            <h4>{name}</h4>
            <div className="arrow"></div>
        </a>
    </article>
}
