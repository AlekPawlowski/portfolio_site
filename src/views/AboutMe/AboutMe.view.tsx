import myFace from '../../assets/img/my_face.jpg';
import './aboutme.style.scss';

export default function AboutMe() {
    return <section id="about_me" className="content_element">
        <article>
            <h2>Short info about me</h2>
            <p>
                I am a programmer with over 5 years of experience. My skills include programming in languages such as JavaScript, TypeScript, as well as knowledge in HTML, CSS (SASS/LESS), GIT, and REST. Over the past years, I have worked on various projects as a freelancer and with teams of developers, serving both small clients and big brands such as Huawei, McDonald's, and SEAT. I have gained experience in developing web applications, content management systems, and mobile applications.

                In my work, I always strive to fulfill my responsibilities in a way that ensures that the solutions I deliver are not only functional and user-friendly but also written in a way that maintains code readability for other developers, while ensuring the appropriate performance of the application.

                In my free time, I enjoy outdoor activities, be a good keeper to my spirited four-legged companion, go on new adventures and trying to express myself through cooking
            </p>
        </article>
        <div className="image_container">
            <img src={myFace} alt="my face" />
        </div>
    </section>
}   