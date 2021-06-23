import React from "react";
// do i need to import pets?
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  // this is the callback that updates the type in state
  onChangeType = (event) => {
    this.setState({
      filters: { type: event.target.value },
    });
  };

  onFindPetsClick = (event) => {
    this.state.filters.type === "all"
      ? // if true, then displays all pets
        fetch("/api/pets")
          .then((res) => res.json())
          .then((json) => this.setState({ pets: json }))
      : // if false, then interpolates what ever type is in state
        fetch(`/api/pets?type=${this.state.filters.type}`)
          .then((res) => res.json())
          .then((json) => this.setState({ pets: json }));
  };
  // call back func passed to PetBrowser
  onAdoptPet = (petId) => {
    // maps over pets array in state
    const pets = this.state.pets.map((pet) => {
      // checks if id in array element is equal to the passed in value, if true, copies object and sets adopted to true
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    // sets the state with the array that was returned from the map function above
    this.setState({ pets: pets });
  };

  render() {
    console.log("log of state filters", this.state.filters);
    console.log("log of state pets", this.state.pets);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
