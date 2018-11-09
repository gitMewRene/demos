import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//BS4 requires popper and jquery still =< and silly for one dropdown
class FilterMobile extends Component{
  constructor(props){
    super(props)
    this.state = {
      open:false
    };
  }
  toggle = e => {
    this.setState({open:(!this.state.open)})
  }
  formatted = event => {
    this.setState({open:false});
    this.props.onChange({
      value:event.target.value
    });
  }
  render(){
  return (
    <div className="dropdown">

    <button className="btn bg-light text-dark border border-dark rounded-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>
    Filter by Tags
  </button>
  <div className={classnames("dropdown-menu",{"d-block":this.state.open})} aria-labelledby="dropdownMenuButton">
  {
    this.props.options.map( (o, idx) => (
      <button value={idx} className={classnames("dropdown-item btn-light",{"active":this.props.options[idx].toggle} )} key={idx} onClick={this.formatted}>{o.name}</button>
    ))
  }  
  </div>
  </div>
    );
  }
}

FilterMobile.propTypes = {
  onChange:PropTypes.func,
  options:PropTypes.array
}

export default FilterMobile