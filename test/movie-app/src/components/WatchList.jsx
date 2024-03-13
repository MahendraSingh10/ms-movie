import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import genreids from "../Utility/Genre";

function WatchList({ watchList, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");

  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGen, setCurrentGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  const sortIncreasing = () => {
    let sortedIncrease = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncrease]);
  };
  const sortDecreasing = () => {
    let sortedDecrease = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecrease]);
  };

  useEffect(() => {
    let temp = watchList.map((movieobj) => {
      return genreids[movieobj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 m-4">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currentGen == genre
                  ? "flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white items-center hover:cursor-pointer mx-4"
                  : "flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white items-center hover:cursor-pointer mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
        {/* <div className="flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white items-center hover:cursor-pointer mx-4">
          All Genre
        </div>
        <div className="flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white items-center hover:cursor-pointer mx-4">
          Action
        </div>
        <div className="flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white items-center hover:cursor-pointer">
          Crime
        </div> */}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search movie"
          className="h-[3rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th>
                <div className="flex justify-center">
                  <div onClick={sortIncreasing} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Rating</div>
                  <div onClick={sortDecreasing} className="p-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movObj) => {
                if (currentGen == "All Genres") {
                  return true;
                } else {
                  return genreids[movObj.genre_ids[0]] == currentGen;
                }
              })
              .filter((mobObj) => {
                return mobObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObject) => {
                return (
                  <tr key={movieObject.original_title} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObject.poster_path}`}
                        alt=""
                      />
                      <div className="mx-10">{movieObject.original_title}</div>
                    </td>
                    <td>{movieObject.vote_average}</td>
                    <td>{movieObject.popularity}</td>
                    <td>{genreids[movieObject.genre_ids[0]]}</td>
                    <td className="text-red-800 hover:cursor-pointer">
                      <div
                        onClick={() => handleRemoveFromWatchList(movieObject)}
                      >
                        Delete
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
