import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveFilter from './components/filter';
import {getAvailableTags, filterCardsByTags} from './helpers/';
import DataCard from './components/data-card';
import Front from './layout/card-front';
import Back from './layout/card-back';

/**
 * I'm called app for demo purposes
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // objects and switching to arrays,
      //had originally thought about using a counter to prioritize keyword order
      tags:[],
      cardList:[],
      cards:[]
    }
  }

  componentDidMount(){
    //fetch json data
    if(this.props.json !== ''){
      fetch(this.props.json)
      .then((response) =>{
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(r => r.json())
      .then(i => { 
        const tags = getAvailableTags(i.cards);
        this.setState({ 
          cardList:i.cards,
          cards:[...i.cards],//could make you a class prop
          //removes the counts this way but quick and dirty
          tags,
        })
      })
      .catch(e => console.warn("OOPS->" + e));

  }
}
  //get a new array of tags to filter against
  onFilterUpdate = event => {
    if(event instanceof Array && event.length > 0){
      console.log('value' + event)
      this.setState({
        cardList:filterCardsByTags(event, this.state.cards)
      })
    }else{
      this.setState({cardList:[...this.state.cards]});
    }
  }
  
  render() {
    return (
      <div className="App container-fluid">
      <div className="row">
        <ResponsiveFilter onChange={this.onFilterUpdate} options={this.state.tags}/>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-wrap">
          {
            (this.state.cardList.length > 0)?
            this.state.cardList.map(
              o => <DataCard data={o} key={o.id}>
                      <Front {...o} key="front"/>
                      <Back {...o} key="back"/>
                    </DataCard>
            ):
            <div className="loading"> One Moment.. Or...Unselect a filter to see more.. </div>
          }
        </div>
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
