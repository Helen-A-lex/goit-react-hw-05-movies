import { useEffect, useState } from "react";
import { getSearchMovie } from "../services/api";
import  SearchMovieForm  from "components/SearchMoviesForm/SearchMovieForm";
export default function Movies () {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        async function loadSearchMovies() {
          try {
              const { results } = await getSearchMovie(search); 
              setList();
          } catch (error) {
            
          }
        } 
        loadSearchMovies();
    }, [search])
    
    const handleSearch = search => {
        setSearch(search);
}

    return (
        <SearchMovieForm onSubmit={handleSearch} />
    )
};
