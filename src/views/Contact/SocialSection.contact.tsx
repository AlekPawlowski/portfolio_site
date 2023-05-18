import { FC } from "react";
import SocialElement from "../../interfaces/SocialElement.interface";
import { SocialComponent } from "./SocialComponent.contact";
import AddSeparator from "../Components/AddSeparator.compoents";

interface SocialArray {
    socialElementArray: SocialElement[];
}

const SocialsSection: FC<SocialArray> = ({ socialElementArray }): JSX.Element => {
    return <section className="socials">
        {
            socialElementArray.map((element, index) => {
                const { name } = element;
                return <SocialComponent key={name} socialElement={element} />
            })
        }
        <AddSeparator />
    </section>
};

export default SocialsSection;