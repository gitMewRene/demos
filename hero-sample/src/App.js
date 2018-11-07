import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveFilter from './components/filter';
import {getAvailableTags} from './helpers/';
import DataCard from './components/data-card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterOptions:[],
      cardList:[],
    }
  }

  componentDidMount(){
    //fetch json data
    if(this.props.json !== ''){
      fetch(this.props.json)
      .then(r => r.json())
      .then(i => { 
        this.setState({ 
          cardList:i.cards,
          //removes the counts this way but quick and dirty
          filterOptions:Object.keys(getAvailableTags(i.cards)) 
        })
      })

  }
}

  onFilterUpdate = event => {
    if(event.value){
    //  this.setState({filterOptions:});
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <ResponsiveFilter onChange={this.onFilterUpdate} options={this.state.filterOptions}/>
        <div className="d-flex flex-wrap">
          {
            (this.state.cardList.length > 0)?
            this.state.cardList.map(
              o => <DataCard {...o} key={o.id}/>
            ):
            <div className="loading"> One Moment.. </div>
          }
        </div>

      </div>
    );
  }
}

App.propTypes = {
  json:PropTypes.string.isRequired
}
App.defaultProps = {
  json:''
}

export default App;
