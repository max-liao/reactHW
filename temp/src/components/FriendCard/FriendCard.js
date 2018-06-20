import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div> 
    {/* {props.test.map(props =>  */}
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Address:</strong> {props.location}
            </li>
          </ul>
        </div>
        <span className="remove" onClick = {() => {
          // console.log(props.id);
          props.onRemove(props.id);
          }}>𝘅</span>
      </div>
    {/* )} */}
  </div>
);

export default FriendCard;
