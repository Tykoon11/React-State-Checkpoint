import React, { Component } from 'react'
import './App.css';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          id: 1,
          fullName: 'Nobleman Ikenna',
          bio: 'I am a value adding engineer',
          imageSrc: '../imageinpublic1.jpeg',
          profession: 'Web developer',
          shows: true
        },
        {
          id: 2,
          fullName: 'Sally August',
          bio: 'I am an awesome business man',
          imageSrc: '../imageinpublic2.jpeg',
          profession: 'business man',
          shows: true
        }
      ]
    }
  }

  
  handleChange = (id) => {
    this.setState({
      people: this.state.people.map((el) =>
        el.id === id ? { ...el, shows: !el.shows } : el
      ),
    });
  };

  

  render() {
    return (
      <div>
        <Profile people={this.state.people}
        handleChange= {this.handleChange}/>
       
      </div>
    )
  }
}

export default App

