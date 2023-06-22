import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button } from './SearchMoviesForm.styled';
import PropTypes from 'prop-types';

export default function SearchMovieForm({ onSubmit }) {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
 
  useEffect(() => {
   const query = searchParams.get('query') || '';
   setSearch(query);
   onSubmit(query);
  }, [searchParams, onSubmit]);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (search.trim() === '') {
      toast.error(
        'The search string cannot be empty. Please specify your search query.',
        { theme: 'colored' }
      );
      return;
    }
    setSearchParams({ query: search });
    onSubmit(search);
    setSearch('');
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        value={search}
        onChange={evt => setSearch(evt.target.value.toLowerCase())}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
