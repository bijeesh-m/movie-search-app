import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Movies from "./pages/Movies";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MoviePage />} />
            </Routes>
        </div>
    );
};

export default App;
