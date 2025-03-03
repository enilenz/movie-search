import React, { useState }  from 'react'
import HttpService from '../service/httpServices'

const Search = ({ onSearchResults, setSearchLoading }) => {

  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    setSearchLoading(true)
    e.preventDefault();
    if (!query.trim()) return;

    try {
      console.log("about to send request")
     
      const response = await HttpService.getDataViaTitle(query)
      console.log(response)
      onSearchResults(response || []) // Send results to parent component
      setSearchLoading(false)
      console.log(response)
    } catch (error) {
      console.error("Error fetching movies:", error);
      onSearchResults([]); // Pass empty array if an error occurs
      setSearchLoading(false)
    }
    setSearchLoading(false)
  };

  return (
    <div class=' '>

      <form class="max-w-md mx-auto shadow-2xl "  onSubmit={handleSearch}>
        <label for="default-search" class="mb-2 text-sm font-medium text-black-900 sr-only ">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-grey-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-black-900 border border-black-300 rounded-lg bg-white-50  " placeholder="Search OMDb Movies..." onChange={(e) => setQuery(e.target.value)} required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-white hover:text-black hover:border-2 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
        </div>
      </form>


      <div class=''>

      </div>

    </div>
  )
}

export default Search