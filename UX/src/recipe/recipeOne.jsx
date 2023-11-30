import {Nav} from '../components/nav'
import './recipeOne.css'
import Video1 from '../assets/recipeOne.mp4'
import Picture from '../assets/italia.png'

export function RecipeOne() {
    return(
        <div className='recipe--one-container'>
            <Nav />
            <img src={ Picture } className='header--container' alt="An logotype picture reading italian cuisine" />
            <h1 className='header--text' alt="Recipe name">Nonna's Cenci di Carnevale </h1>
            <section className='recipe--one-video-container'>
                    <video controls src={ Video1 } className='recipe--one-video' alt="Video that shows a recipie for italian hot chocolate" />
                    <section>
                        <h1 alt="Ingredients list">Ingredients:</h1>
                        <p className='ingredients'>
                        3 cups flour <br/>
                        2 eggs<br/>
                        4 Tablespoon vegetable oil<br/>
                        1/2 cup sugar <br/>
                        1/2 cup white wine<br/>
                        grated rind of 1 orange or lemon<br/>
                        3 cups Canola oil or other vegetable oil for frying<br/>
                        1/4 cup confectioners sugar<br/>
                        </p>
                    </section>
                </section>
        </div>
    )
}