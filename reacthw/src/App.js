import React, {Component} from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Nav from "./components/Nav/Nav";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  state = {friends};
  clickedarray = [];
  navMessage = "Click a picture to start";
  highscore = 0;
  score = 0;
  navScore = `Score: ${this.score} | Top Score: ${this.highscore}`;

  componentDidMount() {
    this.timerID = setInterval(
      // () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  click = id => {
    // console.log(this);
    // console.log(id);
    var found = false;
    for (let i=0; i<this.clickedarray.length; i++){
      if (this.clickedarray[i]===id){
        found = true;
        break;
      }
    }
    if (found === false){
      this.clickedarray.push(id);
      this.score++;
      if (this.score > this.highscore){
        this.highscore = this.score;
      }
      this.navMessage = "Score!";
    } else {
      this.score = 0;
      this.clickedarray = [];
      this.navMessage = "Miss! Starting Over";
    } 
    this.navScore = `Score: ${this.score} | Top Score: ${this.highscore}`;
    // console.log(found);
    console.log(this.navScore);
    console.log("array: " + this.clickedarray);
    this.setState({});
    // return (<Nav key = "Nav" navMessage = {this.navMessage} navScore = {this.navScore}/>);
  }

  render() {
    return (
    <Wrapper>
        {/* {<Nav key = "Nav" score = {this.score} highscore = {this.highscore} navscore = {this.navScore}/>} */}
        {<Nav key = "Nav" navMessage = {this.navMessage} navScore = {this.navScore}/>}
        <h1 className="title">Friends List</h1>
        {
          this.state.friends.map((friends) => (
            <FriendCard key = {friends.id} 
                        id = {friends.id} 
                        name = {friends.name} 
                        image = {friends.image}
                        occupation = {friends.occupation}
                        location = {friends.location}
                        click = {this.click} />
            )
          )
        }
    </Wrapper>
    )
  }
}

export default App;
