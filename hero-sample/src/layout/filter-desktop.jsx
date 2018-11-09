import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FilterDesktop = ({options, onChange}) => {
  
  const formatted = event => {
    onChange({
      value:event.target.value
    });
  }
  
  const btns = options.map(
    (o, key) => <button key={o.name} name={o.name} value={key} className={classnames("btn m-1",{"btn-dark":o.toggle},{"btn-light":!o.toggle})} aria-pressed={o.toggle} onClick={formatted}>{o.name}</button>
  )
  return (
      <div className="d-flex flex-wrap">
      {btns}
      </div>
  );
}
FilterDesktop.propTypes = {
  options:PropTypes.array,
  onChange:PropTypes.func

};
export default FilterDesktop