import React from 'react';
import PropTypes from 'prop-types';

const FilterDesktop = ({children}) => {
  return (
      <div className="d-flex flex-wrap">
      {children}
      </div>
  );
}
FilterDesktop.propTypes = {
  children:PropTypes.node,

};
export default FilterDesktop