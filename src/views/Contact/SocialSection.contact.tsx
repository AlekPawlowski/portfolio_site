import { FC } from "react";
import SocialElement from "../../interfaces/SocialElement.interface";
import { SocialComponent } from "./SocialComponent.contact";

interface SocialArray {
    socialElementArray: SocialElement[];
}

const SocialsSection: FC<SocialArray> = ({ socialElementArray }): JSX.Element => {

    return <section>
        <h2>Socials:</h2>
        {
            socialElementArray.map((element, index) => {
                const { name } = element;
                return <SocialComponent key={name} socialElement={element} />
            })
        }
    </section>
};

export default SocialsSection;