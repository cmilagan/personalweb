import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Navbar/>
            <div className="sections">
                <Intro/>
                <Projects/>
            </div>
            <Contact/>
        </div>
    );
}

export default App;