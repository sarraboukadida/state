import React, { Component } from 'react'

export default class App extends Component {
state = { 
  fullName: 'Hammadi',
  bio: 'baskett-ball player',
  imgSrc: '' ,
  profession:'prof de sport',
  shows: true,
  count:0
}

componentDidMount() {
  const intervalId = setInterval(() => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }, 1000);
  }


  render() {
    return (
      <div>
              <button onClick={()=>this.setState({shows:!this.state.shows})}>show</button>
              {
                this.state.shows ? 
                <div>
                  <h1> {this.state.fullName}</h1>
                  <h1> {this.state.bio}</h1>
                  <h1> {this.state.imgSrc}</h1>
                  <h1> {this.state.profession}</h1>
                </div> : "sakarna"
              }
    
              
      </div>
    
    )
  }
}


