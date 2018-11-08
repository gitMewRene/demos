import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveFilter from './components/filter';
import {getAvailableTags, filteredCards, setActiveTags} from './helpers/';
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
        const tags = Object.keys(getAvailableTags(i.cards));
        this.setState({ 
          cardList:i.cards,
          cards:i.cards,//could make you a class prop
          //removes the counts this way but quick and dirty
          tags,
          filterOptions:tags
        })
      })

  }
}

  onFilterUpdate = event => {
    if(event.value){

      
      //update list with filterCard result
      const result = filteredCards(event.value, this.state.cards)
      //might want an additional prop to indicate selected state
      this.setState({
        cardList:result,
        filterOptions:setActiveTags(event.value, this.state.tags)});
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
              o => <DataCard data={o} key={o.id}/>
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
