import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FilterDesktop from '../layout/filter-desktop';
import FilterMobile from '../layout/filter-mobile';

import {createToggleTree, toggleElement, filterByToggleState} from '../helpers/';
/**
 * alternatively i could have passed the components as children and used
 * a key to null the undesired one from render
 * @param {*} props 
 */
class ResponsiveFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      options:props.options,
      btns:createToggleTree(props.options),
    }
    //props.option will serve as the clean version
  }
  static getDerivedStateFromProps(props, state){
    if(state.options !== props.options){
    return {
      options:props.options,
      btns:createToggleTree(props.options)
    }}
    return null;
  }
  //filterSelect will get a event.target.name preferably a string
  onFilterSelect = event => {
    //using contains to match the whole content
    const btns = toggleElement(event.value, this.state.btns);
      //might want an additional prop to indicate selected state
    
      //update this view
      this.setState({ btns });
    //parse to return an array of active elements
    this.props.onChange(filterByToggleState(true, btns));
  }
  
  render(){

    if(this.props.mobile) return <FilterMobile options={this.state.btns} onChange={this.onFilterSelect} />;
    return <FilterDesktop options={this.state.btns} onChange={this.onFilterSelect} />;
  }
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