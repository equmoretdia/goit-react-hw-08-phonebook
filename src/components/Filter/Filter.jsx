import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../redux/contacts & filter/filterSlice';
import { selectFilterValue } from '../../redux/contacts & filter/selectors';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <form className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Filter;
