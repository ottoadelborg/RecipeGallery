import {Nav} from '../components/nav'
import './recipeOne.css'
import Video3 from '../assets/recipeThree.mp4'
import Picture from '../assets/italia.png'

export function RecipeThree() {
    return(
        <div className='recipe--one-container'>
            <Nav />
            <img src={ Picture } className='header--container' alt="An logotype picture reading italian cuisine" />
            <h1 className='header--text' alt="Recipe name">Melanzana 'Ncaciata </h1>
            <section className='recipe--one-video-container'>
                    <video controls src={ Video3 } className='recipe--one-video' alt="Video that shows a recipie for italian hot chocolate" />
                    <section>
                        <h1>Ingredients:</h1>
                        <p className='ingredients'>
                        Non-stick spray for the pans<br />
                        2-3 eggplants, sliced<br />
                        Coarse salt (as needed)<br />
                        Vegetable oil or olive oil (for frying the eggplant slices)<br />
                        1/2 cup plain breadcrumbs, divided to coat the bottoms of two pans<br />
                        2/3 cup of simple tomato sauce (recipe included below)<br />
                        2/3 cup freshly grated Caciocavallo Ragusano cheese, divided in 2<br />
                        </p>
                        <h2>Simple Tomato Sauce:</h2>
                        <p className='ingredients'>
                        1/4 cup Extra Virgin Olive Oil<br />
                        2 cloves fresh garlic, chopped<br />
                        Sprigs of fresh basil, chopped<br />
                        Salt and pepper to taste<br />
                        </p>
                    </section>
                </section>
        </div>
    )
}