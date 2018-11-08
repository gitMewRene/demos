import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
    <div className="data-card flex-item col-6 col-md-4">
    <Front {...this.props.data} onAction={this.flip} key="front"/>
    <Back {...this.props.data} onAction={this.flip} key="back"/>
    </div>
    );
  }
}
DataCard.propTypes = {
  data:PropTypes.object
}

export default DataCard;