import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../redux/contacts & filter/filterSlice';
import { selectFilterValue } from '../../redux/contacts & filter/selectors';

import { Form, Label, Input } from './FilterStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </Label>
    </Form>
  );
};

export default Filter;
