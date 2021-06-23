import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  render() {
    // maps over pets prop and passes the onAdoptPet function, pet object, and key
    const petCards = this.props.pets.map((pet) => (
      <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id} />
    ));
    // returns the array of petcards
    return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser;
