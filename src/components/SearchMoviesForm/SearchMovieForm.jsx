import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SearchMovieForm({ onSubmit }) {
const [search, setSearch] = useState("");
    const handleInputChange = evt => {
        setSearch(evt.currentTarget.value.toLowerCase());  
    
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        if (search.trim() === '') {
      toast.error(
        'The search string cannot be empty. Please specify your search query.',
        { theme: 'colored' }
      );
      return;
        }
        onSubmit(search);
        setSearch("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search your favorite movie"
          value={search}
          onChange={handleInputChange} />
           <button type="submit"></button>
        </form>
    )
}