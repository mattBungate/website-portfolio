import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

import { ChessBoardComponent } from './ChessBoardComponent';


export const Chess = () => {

    return (
        <div>
            <NavBar />
            <ChessBoardComponent />
            <Footer />
        </div>
    );
}