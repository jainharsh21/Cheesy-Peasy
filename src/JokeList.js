import React, { Component } from "react";
import axios from "axios";
import './JokeList.css'

class JokeList extends Component {
  static defaultProps = {
    numJokes: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }
  async componentDidMount() {
    const API_URL = "https://icanhazdadjoke.com/";
    let jokes = [];
    while (jokes.length < this.props.numJokes) {
      let res = await axios.get(API_URL, {
        headers: { Accept: "application/json" },
      });
      jokes.push(res.data.joke);
    }
    // console.log(jokes);
    this.setState({
      jokes: jokes,
    });
  }
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map((j) => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
