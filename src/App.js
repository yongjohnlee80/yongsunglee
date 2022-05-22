
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation-bar/navigation-bar.component";
import About from "./routes/about/about.route";
import Home from "./routes/home.route";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Home />} />
                <Route path="/projects/games" element={<Home />} />
                <Route path="/projects/websites" element={<Home />} />
                <Route path="/projects/other" element={<Home />} />
                <Route path="/contact" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
