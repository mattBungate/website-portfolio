import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Intro } from './Intro';
import { Game } from './Game';
import '../../App.css';
import './ConnectFour.css';


export const ConnectFour = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <Game />
            <Footer />
        </div>
    );
}