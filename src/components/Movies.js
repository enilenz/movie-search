import React, {useEffect}from 'react';
import loadingGif from '../assets/loading.gif'

const Movies = ({ movies, isLoading }) => {
  

  useEffect(() => {
    console.log(movies)
  }, [movies]);

  if (!movies) {
    return <p className="text-center text-black">No movie details available 🎥🙊.</p>;}

if (isLoading) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={loadingGif} width="50px" alt="Loading..." />
      <p className="ml-2 text-black text-lg">Loading...</p>
    </div>
  );
}

  return (
    <div>


      {movies.Response === "True" &&
      <div>
              <div className="max-w-2xl mx-auto bg-white-900 text-black rounded-lg shadow-lg overflow-hidden mb-32 border border-black">
      <img src={movies.Poster} alt={movies.Title} className="w-full h-full object-cover" />
      <div className="p-6 ">
        <h2 className="text-3xl font-bold">{movies.Title} ({movies.Year})</h2>
        <div className="pt-2">
        <p className="text-gray-400 text-sm">Released: {movies.Released}</p>
        <p className="text-gray-400 text-sm">Genre: {movies.Genre}</p>
        <p className="text-gray-400 text-sm">Director: {movies.Director}</p>
        </div>
  
        <p className="mt-4">{movies.Plot}</p>
  
        <div className="mt-4 flex justify-between items-center">
          <p className="text-yellow-800 text-lg font-semibold">
            IMDb Rating: ⭐ {movies.imdbRating}
          </p>
          <p className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
            {movies.Rated}
          </p>
        </div>
      </div>
    </div>
      </div> 
      
   }

   {movies.Response === "False" &&   <div>
        {<p className="text-center text-black">No movie details available 🎥🙊.</p>}
      </div>}
    </div>
        
    
);
};

export default Movies;


