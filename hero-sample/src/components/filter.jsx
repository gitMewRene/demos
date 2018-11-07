import React from 'react';
import PropTypes from 'prop-types';
import FilterDesktop from '../layout/filter-desktop';
import FilterMobile from '../layout/filter-mobile';

/**
 * alternatively i could have passed the components as children and used
 * a key to null the undesired one from render
 * @param {*} props 
 */
const ResponsiveFilter = props => {
  if(props.mobile) return <FilterMobile {...props} />;
  return <FilterDesktop {...props}/>;
}
ResponsiveFilter.propTypes = {
  mobile:PropTypes.boolean,
  options:PropTypes.object,
  onChange:PropTypes.func
};

ResponsiveFilter.defaultProps = {
  onChange:()=>{},
  options:{},
  mobile:false
}
export default ResponsiveFilter