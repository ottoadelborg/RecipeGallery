import { Nav } from "./nav";
import { Link } from "react-router-dom";
import Picture from '../assets/italia.png'
import Recipe1 from '../assets/recipe1.png'
import Recipe2 from '../assets/recipe2.png'
import Recipe3 from '../assets/recipe3.png'
import './recipe.css'

export function Recipe() {
    return(
        <section className="recipe--container">
        <Nav />
        <img src={ Picture } className='header--logo' alt="An logotype picture reading italian cuisine" />
            <section className="recipe--one-container-page">
                    <img src={Recipe1} className='recipe--one' alt="An picture of a plate of desserts with the text How to make holiday bows " />
                <section className="recipe--container-text" >
                    <p className="recipe--text-desc">This delicate, crispy treat comes with many names. In Tuscany, we call them Cenci, or "rags"... this originates from the fact that they look like rags and that they were usually made from leftover pieces of dough. In other regions, they are called Chiacchiere, or "little gossips," cioffe, or bows. If you were to ask 5 different Italians what this dessert is called, you would receive 5 different responses. No matter what you call them, they will taste delicious!
                    </p>
                    <Link to="/recipeone">
                    <button className="recipe--button">Learn more</button>
                    </Link>
                </section>
            </section>
            <section className="recipe--two-container-page">
                    <img src={Recipe2} className='recipe--two' alt="An picture of a plate of pasta with the text penne con cavolfiore" />
                <section className="recipe--container-text">
                    <p className="recipe--text-desc">
                    Travel back in time with us as we dive into the archives for a classic cooking video from over a decade ago! While the years have passed, one thing remains the same: the delicious & humble flavors that make this recipe a staple in any kitchen. Speaking of kitchens, you might notice that mine hasn't changed all that much – well, except for the walls that used to be a bit more yellow!
                    </p>
                    <Link to="/recipetwo">
                    <button className="recipe--button">Learn more</button>
                    </Link>
                </section>
            </section>
            <section className="recipe--three-container-page">
                <img src={Recipe3} className='recipe--three' alt="An picture of a eggplant cake with the text how to make layered eggplant" />
                <section className="recipe--container-text">
                    <p className="recipe--text-desc">This mouthwatering recipe has been a hit with our dinner guests for years, and it was lovingly passed down to us by our dear friend, Josephine Schininá Lissandrello. My husband Howard and our granddogs Pupcake and Pom Pom are featured in today's video!
                    </p>
                    <Link to="/recipethree">
                    <button className="recipe--button">Learn more</button>
                    </Link>
                </section>
            </section>
        </section>
    )
}