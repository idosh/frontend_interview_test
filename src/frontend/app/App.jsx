import React, { Component } from 'react'
import { fetchListings } from './lib/apiService';
import { Listing } from './components/Listing'
require('./scss/Main.scss');

export class App extends Component {
  constructor() {
    super();
    this.state = {
      listings:[]
    }
  }
  
  componentDidMount () {
    fetchListings().then((listings)=>{
      listings = listings.splice(0,10)
      this.setState({listings})
    })
  }

  render () {
    if(!this.state.listings) 
        return;
    return (
      <div className="container">
        <div className="row">
          {this.state.listings.map((list, i) => <Listing {...list} key={i}></Listing>)} 
        </div>
      </div>
      
    );
  }
}
