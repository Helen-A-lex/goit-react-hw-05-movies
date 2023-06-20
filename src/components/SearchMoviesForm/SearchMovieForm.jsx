import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button } from './SearchMoviesForm.styled';
import PropTypes from 'prop-types';

export default function SearchMovieForm({ onSubmit }) {
  const [search, setSearch] = useState('');
  const handleInputChange = evt => {
    setSearch(evt.currentTarget.value.toLowerCase());
  };
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
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        value={search}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
