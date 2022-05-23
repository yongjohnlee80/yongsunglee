
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation-bar/navigation-bar.component";
import Underconstruction from "./components/underconstruction/underconstruction.component";
import About from "./routes/about/about.route";
import Home from "./routes/home.route";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Underconstruction />} />
                <Route path="/projects/games" element={<Underconstruction />} />
                <Route path="/projects/websites" element={<Underconstruction />} />
                <Route path="/projects/other" element={<Underconstruction />} />
                <Route path="/contact" element={<Underconstruction />} />
            </Route>
        </Routes>
    );
};

export default App;
