import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyWatchList from "./pages/myWatchList/MyWatchList";
import Suggestion from "./pages/suggestion/Suggestion";
import Footer from "./components/footer/Footer";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Collections from "./pages/collections/Collections";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-watch-list" element={<MyWatchList />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/suggestions" element={<Suggestion />} />
          <Route path="/movie/:id" element={<MovieDetails />} exact={true} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
