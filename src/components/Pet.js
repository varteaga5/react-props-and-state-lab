import React from "react";

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* uses props to grab name and gender */}
            {this.props.pet.name + " "}
            {this.props.pet.gender === "male" ? "♂" : "♀"}
          </a>
          <div className="meta">
            {/* uses props to grab type cat dog, pig etc. */}
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            {/* uses props to grab age and weight */}
            <p>Age: {this.props.pet.age}</p>
            <p>
              Weight:{" "}
              {/* renders weight displaying lb or lbs if greater than 1 */}
              {this.props.pet.weight > 1
                ? this.props.pet.weight + "lbs"
                : this.props.pet.weight + "lb"}
            </p>
          </div>
        </div>
        <div className="extra content">
          {/* checks if pet has been adopted if true then the already adopted button displays */}
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            // if false then the adopt pet button is visible
            <button
              // when button is clicked, onAdoptPet will run and is passed in the id of the pet
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button"
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
