/* to add:
    -> linkedin
    -> git
    -> codewars
    -> in the future and if i had i can add to all this codepen, but firsly i need to fill that
    -> contact form:
        -> name & surname
        -> topic
        -> message
        -> email / phonenumber
    -> email (alkemCompany)
    -> cv to download
*/

import SocialElement from "../../interfaces/SocialElement.interface"
import SocialsSection from "./SocialSection.contact";
import DownloadMaterials from "./DownloadMaterials.contact";
import './contact.style.scss'

const contactData: SocialElement[] = [
    {
        name: "LinkedIn",
        data: "https://www.linkedin.com/in/aleksander-paw%C5%82owski-340582148/"
    },
    {
        name: "Git",
        data: "https://github.com/AlekPawlowski"
    },
    {
        name: "Email",
        data: "alkemcompany.pawlowski@gmail.com"
    },
    {
        name: "Codewars",
        data: "https://www.codewars.com/users/djaskra"
    },
    {
        name: 'Codepen',
        data: "https://codepen.io/djaskra"
    }
]

/**
 * Element for all contact information and handle them
 * @return {JSXElement} JSXElement
 */
export default function Contact() {
    return <section className="content_element" id="contact">
        <h1>Contact</h1>
        <p>
            If you have wish to know more about me or my work or see more of my work i recomend use these social canals.
            <br />
            I will do my best to provide reply as soon as possible.
            <br />
            Here are the canals:
        </p>
        <SocialsSection socialElementArray={contactData}/>
        <p>Or meaby you want to get my CV in order to get more compressed information about me, then feel free to download provided CV in polish or english:</p>
        <DownloadMaterials />
    </section>
}