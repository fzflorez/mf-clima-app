import styles from './Form.module.css';
import { countries } from '../../data/db';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { SearchType } from '../../types';
import Message from '../Message/Message';

type FormProps = {
  searchWeather: (search: SearchType) => Promise<void>;
};

const initialState = {
  city: '',
  country: '',
};

export default function Form({ searchWeather }: FormProps) {
  const [search, setSearch] = useState<SearchType>(initialState);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).some((value) => value.trim() == '')) {
      setMessage('*Todos los campos son obligatorios*');
      setTimeout(() => {
        setMessage('');
      }, 3000);
      return;
    }

    searchWeather(search);

    setSearch(initialState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {message && <Message>{message}</Message>}
      <div className={styles.field}>
        <label htmlFor='city'>Ciudad:</label>
        <input
          type='text'
          id='city'
          name='city'
          autoComplete='off'
          placeholder='Ingresa una ciudad...'
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='country'>País:</label>
        <select
          id='country'
          name='country'
          value={search.country}
          onChange={handleChange}
        >
          <option value=''>-- Selecciona tu país --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input type='submit' value='Buscar Clima' />
    </form>
  );
}
