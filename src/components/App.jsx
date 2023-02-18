import Footer from "./Footer";
import Header from "./Header";
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import Search from "./Search";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import Signin from "./Signin";
import Signup from "./Signup";

function App(){
    return (
    <>  
        <Router>
        <Header /> 
            <Routes>
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/blogpost" element={<Blog />} />
            </Routes>
            <Footer />
      </Router>
    </>
    )
}
export default App;