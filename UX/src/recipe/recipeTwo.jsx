import {Nav} from '../components/nav'
import './recipeOne.css'
import Video2 from '../assets/recipeTwo.mp4'
import Picture from '../assets/italia.png'

export function RecipeTwo() {
    return(
        <div className='recipe--one-container'>
            <Nav />
            <img src={ Picture } className='header--container' alt="An logotype picture reading italian cuisine" />
            <h1 className='header--text' alt="Recipe name">Penne with Cauliflower, Pine Nuts, and Raisins </h1>
            <section className='recipe--one-video-container'>
                    <video controls src={ Video2 } className='recipe--one-video' alt="Video that shows a recipie for italian hot chocolate" />
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