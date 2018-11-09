import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FilterDesktop from '../layout/filter-desktop';
import FilterMobile from '../layout/filter-mobile';
//kinda big..
import Responsive from 'react-responsive';
//could cheat by reading off window.innerWidth
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
  //filterSelect will get a event.value as a numeric string
  onFilterSelect = event => {
    //flip the selected element toggle in the list
    const btns = toggleElement(event.value, this.state.btns);
    
      //update this view
      this.setState({ btns });

    //push up an array of tag strings
    this.props.onChange(filterByToggleState(true, btns));
  }
  
  render(){
    return (
    <div className="col-12">
    <Responsive maxWidth={767}>
      <FilterMobile options={this.state.btns} onChange={this.onFilterSelect} />
    </Responsive>
    <Responsive minWidth={768}>
      <FilterDesktop options={this.state.btns} onChange={this.onFilterSelect} />
    </Responsive>
    </div>)
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