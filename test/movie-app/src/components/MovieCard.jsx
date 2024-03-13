import React from "react";

function MovieCard({
  movieObject,
  poster_path,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList,
}) {
  function doesContains(movieObject) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObject.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:bg-violet-600 hover:cursor-pointer flex flex-col justify-between m-3 items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContains(movieObject) ? (
        <div
          onClick={()=>handleRemoveFromWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-600/20"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={()=>handleAddToWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-600/20"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
