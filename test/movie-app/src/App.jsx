import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObject) => { 
    let newWatchList = [...watchList, movieObject];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList); 
  };

  let handleRemoveFromWatchList = (movieObject) => {
    let filterWatchList = watchList.filter((movie) => {
      return movie.id != movieObject.id;
    });    
    setWatchList(filterWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchList))
  };
  
  useEffect(() => {
    let localStorageItems = localStorage.getItem("moviesApp");
    if (!localStorageItems) {
      return;
    }
    setWatchList(JSON.parse(localStorageItems));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
