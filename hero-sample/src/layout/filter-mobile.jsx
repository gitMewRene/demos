import React from 'react';
import PropTypes from 'prop-types';

const FilterMobile = ({options, children}) => {

  
  return (
      <select className="dropdown" options={options} >
      </select>
  );
}

FilterMobile.propTypes = {
  children:PropTypes.node,
  options:PropTypes.array
}

export default FilterMobile