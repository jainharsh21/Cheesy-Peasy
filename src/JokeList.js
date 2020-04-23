import React, { Component } from "react";
import axios from "axios";

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
        <h1>Dad Jokes</h1>
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
