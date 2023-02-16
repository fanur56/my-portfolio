import './App.css';
import {Header} from "./components/header/Header";
import {Greetings} from "./components/greetings/Greetings";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projectsBlock/Projects";
import {RemoteWork} from "./components/remoteWork/RemoteWork";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Greetings/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
