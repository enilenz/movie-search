import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import Movies from './components/Movies';
import Showcase from './components/Showcase';

import texture from '../src/assets/white-texture.jpg'
import menu from '../src/assets/menu.png'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  return (
    <div>
      <Header />
      <Hero />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-9 pt-44">
  
        <div class="order-first md:order-last">
          <Search onSearchResults={setMovies} setSearchLoading={setSearchLoading} />
        </div>

        <div class="md:col-span-2">
          <Movies movies={movies} isLoading={searchLoading} />
        </div>
      </div>

      <div class='mt-2'>
        <Showcase />
      </div>


    </div>
  );
}

export default App;
