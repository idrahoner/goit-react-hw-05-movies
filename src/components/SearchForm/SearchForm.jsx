import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // if (!input) {
    //   return;
    // }

    onSubmit(input);

    setInput('');
  };

  const handleChange = event => {
    setInput(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={input}
        onChange={handleChange}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};