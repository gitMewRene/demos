import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * DataCard accepts a layout and assembles the view
 * available layouts, front, back
 */
class DataCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      flipped:false,
    }
    this.flip = this.flip.bind(this);
  }

  flip(){
    this.setState({flipped: !this.state.flipped});
  }

  render(){
    return (
    <div className="data-card flex-item col-6 col-md-4">
    {this.props.children}
    </div>
    );
  }
}
DataCard.propTypes = {
  children:PropTypes.node
}

export default DataCard;