import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';
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

  flip(event){
    
      this.setState({flipped: !this.state.flipped});
  }
  

  render(){
    
    const active = this.state.flipped? "active":"";
    return (
      <React.Fragment>
      <Responsive maxWidth={767}>
        <div className={`data-card flex-item col-6 col-md-4 ${active}`} onClick={this.flip}>
        {this.props.children}
        </div>
      </Responsive>
      <Responsive minWidth={768}>
      <div className={`data-card flex-item col-6 col-md-4 flipped`}>
      {this.props.children}
      </div>
      </Responsive>
      </React.Fragment>
    );
  }
}
DataCard.propTypes = {
  children:PropTypes.node
}

export default DataCard;