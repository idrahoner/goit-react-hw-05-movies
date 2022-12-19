import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, InputField, SubmitButton } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const query = input.trim().toLowerCase();

    if (!query) {
      return;
    }

    onSubmit(query);

    setInput('');
  };

  const handleChange = event => {
    setInput(event.currentTarget.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="query"
        value={input}
        onChange={handleChange}
        placeholder="Search movies..."
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
