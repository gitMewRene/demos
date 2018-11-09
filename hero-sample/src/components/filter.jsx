import React from 'react';
import PropTypes from 'prop-types';
import FilterDesktop from '../layout/filter-desktop';
import FilterMobile from '../layout/filter-mobile';

/**
 * alternatively i could have passed the components as children and used
 * a key to null the undesired one from render
 * @param {*} props 
 */
const ResponsiveFilter = ({onChange, mobile, options}) => {

  if(mobile) return <FilterMobile options={options} onChange={onChange} />;
  return <FilterDesktop options={options} onChange={onChange} />;
}
ResponsiveFilter.propTypes = {
  mobile:PropTypes.bool,
  options:PropTypes.array,
  onChange:PropTypes.func
};

ResponsiveFilter.defaultProps = {
  onChange:()=>{},
  options:[],
  mobile:false
}
export default ResponsiveFilter