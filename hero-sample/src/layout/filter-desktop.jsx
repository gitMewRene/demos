import React from 'react';
import PropTypes from 'prop-types';

const FilterDesktop = ({options, onChange}) => {
  
  const formatted = event => {
    onChange({
      value:event.target.name
    });
  }
  
  const btns = Object.keys(options).map(
    o => <button key={o} name={o} className="btn btn-light m-1" onClick={formatted}>{o}</button>
  )
  return (
      <div className="d-flex flex-wrap">
      {btns}
      </div>
  );
}
FilterDesktop.propTypes = {
  options:PropTypes.object,
  onChange:PropTypes.func

};
export default FilterDesktop