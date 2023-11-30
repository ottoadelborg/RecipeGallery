import {Nav} from './nav'
import { Link } from 'react-router-dom';
import './home.css'
import Picture from '../assets/italia.png'
import Recipe1 from '../assets/recipe1.png'
import Recipe2 from '../assets/recipe2.png'
import Recipe3 from '../assets/recipe3.png'
import Video from '../assets/home-video.mp4'

export function Home() {
    return (
        <div className="home--container">
            <Nav />
            <section className='header--container'>
                <img src={ Picture } className='header--logo' alt="An logotype picture reading italian cuisine" />
            </section>
            <section className='video--container'>
                <video controls src={ Video } className='home--video' alt="Video that shows a recipie for italian hot chocolate" />
                <section className='home--text'>
                    <h1>Welcome to Kitchen on the Cliff with Giovanna</h1>
                    <p className='front--page-text'>Nestled in the heart of the picturesque Italian mountains is the culinary haven of Giovanna. A passionate and seasoned chef, Giovanna invites you on a journey through the rich flavors and traditional recipes that define her mountain kitchen.</p>
                    <p>Embark on a gastronomic adventure as you explore the art of Italian cooking, elevated to new heights amidst the serene landscapes that inspire each dish. From the quaint charm of her kitchen, Giovanna shares her love for authentic Italian cuisine, passed down through generations.</p>
                    <h2>Explore more below!</h2>
                </section>
            </section>
            <br />
            <section className='home--links--container'>
                <Link to="/recipeone">
                    <img src={Recipe1} className='recipe--one' alt="An picture of a plate of desserts with the text How to make holiday bows " />
                </ Link>
                <Link to="/recipetwo">
                    <img src={Recipe2} className='recipe--two' alt="An picture of a plate of pasta with the text penne con cavolfiore" />
                </Link>
                <Link to="/recipethree">
                    <img src={Recipe3} className='recipe--three' alt="An picture of a eggplant cake with the text how to make layered eggplant" />
                </Link>
            </section>
        </div>
    )
}