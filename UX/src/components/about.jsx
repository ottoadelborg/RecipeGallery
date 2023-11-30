import { Nav } from "./nav";
import { Link } from "react-router-dom";
import './about.css'
import Picture from '../assets/italia.png'
import Lady from '../assets/lady.png'

export function About() {
    return(
        <div className="about--page-container">
            <section className="header--picture-container">
                <Nav />
                <img src={ Picture } className='header--logo' alt="An logotype picture reading italian cuisine" />
            </section>
            <section className="info--container">
                <img src={Lady} className="about--picture" alt="A picture of Giovanna holding a bowl smiling" />
                <section className="about--text-container">
                    <h1 className="about--header-text"> This is Giovanna</h1>
                    <p className="about--bread-text">My name is Giovanna Bellia LaMarca and I am here to keep Sicilian recipes alive.<br /> I wrote three Italian cookbooks: Sicilian Feasts, The Cooking of Emilia-Romagna: Culinary Treasures of Northern Italy, and the Language and Travel Guide to Sicily. Instead of writing a fourth book, I decided to join the youth on the YouTube platform and make instructional cooking videos instead. Enjoy!</p>
                    <p className="link--text">If you want to learn more about my cooking, click the link blow to explore my Youtube channel!</p>
                    <Link to="https://www.youtube.com/@GiovannaBelliaLaMarca" className="link--container">
                        <button className="about--link-button">My Youtube Channel</button>
                    </Link>
                </section>
            </section>
        </div>
    )
}
