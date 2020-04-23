import React from 'react';

const SelectDropdown = ({ title, options }) => (
  <section>
    <h2>{title}</h2>
    <select>
      <option value="" defaultValue> </option>
      {options.map(({ username }) => (<option value={`${username}`}>{username}</option>))}
    </select>
  </section>
);

export default SelectDropdown;
