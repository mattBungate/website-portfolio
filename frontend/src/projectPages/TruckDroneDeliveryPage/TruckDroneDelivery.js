import { AnimationDisplayBox } from "./AnimationDisplay";
import { NavBar } from "../../components/NavBar";
import { Intro } from './Intro';
import { ComplexityExplanation } from "./ComplexityExplanation";
import { Formulation } from "./Formulation";
import { ImpactOfParameters } from "./ImpactOfParameters";
import { Footer } from "../../components/Footer";

export const TruckDroneDelivery = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <AnimationDisplayBox />
            <Footer />
        </div>
    );
}