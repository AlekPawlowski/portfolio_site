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
import Form from "./Form.contact";
import DownloadMaterials from "./DownloadMaterials.contact";

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
    }
]

/**
 * Element for all contact information and handle them
 * @return {JSXElement} JSXElement
 */
export default function Contact() {
    return <section className="content_element" id="contact">
        <SocialsSection socialElementArray={contactData}/>
        <Form />
        <DownloadMaterials />
    </section>
}