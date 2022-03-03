import Footer from "./Footer";
import logo from "./images/kim2.jpg"; // with import
const Home = () => {
    return(
        <div>
            <h1>Välkommen</h1>
            <p>Till min sida</p>
            <img src={logo} />
            <h2></h2>
            <Footer/>
        </div>
    );
};

export default Home;