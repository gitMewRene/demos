import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Flipper from 'react-card-flip';

import Front from '../layout/card-front';
import Back from '../layout/card-back';

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
    <div className="data-card col-6 col-md-4 my-2">
    <Front {...this.props} onAction={this.flip} key="front"/>
    <Back {...this.props} onAction={this.flip} key="back"/>
    </div>
    );
  }
}
DataCard.propTypes = {
  data:PropTypes.object,
}

export default DataCard;