import { Link } from "react-router-dom";
import lapi from "../img/lapi.jpg";
// import i2 from "../img/2.png";
import man from "../img/man.jpg";
import lap from "../img/lap.jpg";
import arti from "../img/arti.jpg";

function Article(props){
    return <div className="home-articles max-width-1 m-auto font2 my-2">
        <h2>{props.heading}</h2>
        <div className="year-box adjust-year">
            <div>   <h3>Year</h3> </div>
            <div>
                <input type="radio" name="year" id="" /> 2020
            </div>
            <div>
                <input type="radio" name="year" id="" /> 2021
            </div>
            <div>
                <input type="radio" name="year" id="" /> 2022
            </div>
            <div>
                <input type="radio" name="year" id="" /> 2023
            </div>
        </div>
        <div className="home-article">
            <div className="home-article-img">
                <img src={arti} alt="article" />
            </div>
            <div className="home-article-content font1">
                <Link to="/blogpost" rel="noopener noreferrer"><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
                <div>Author Name</div>
                <span>15 June | 6 min read</span>
            </div>
        </div>
        <div className="home-article">
            <div className="home-article-img">
                <img src={lapi} alt="article" />
            </div>
            <div className="home-article-content font1">
                <Link to="/blogpost" rel="noopener noreferrer"><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
                <div>Author Name</div>
                <span>15 June | 6 min read</span>
            </div>
        </div>
        <div className="home-article">
            <div className="home-article-img">
                <img src={man} alt="article" />
            </div>
            <div className="home-article-content font1">
                <Link to="/blogpost" rel="noopener noreferrer"><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
                <div>Author Name</div>
                <span>15 June | 6 min read</span>
            </div>
        </div>
        <div className="home-article">
            <div className="home-article-img">
                <img src={lap} alt="article" />
            </div>
            <div className="home-article-content font1">
                <Link to="/blogpost" rel="noopener noreferrer"><h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3></Link>
                <div>Author Name</div>
                <span>15 June | 6 min read</span>
            </div>
        </div> 
    </div>
}
export default Article;