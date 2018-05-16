import React, { Component } from "react";

import AdvertisementList from "./Components/AdvertisementList";
import AdvertisementForm from "./Components/AdvertisementForm";

import thanos from "./Components/Images/thanos.jpg";

class App extends Component {
  state = {
    headlinesArray: ["Помогу спасти Вселенную от Таноса"],
    descriptionsArray: [
      "Предлагаю лишить его руки с помощью телепорта Доктора Стренджа"
    ],
    phoneNumbersArray: ["+7 (800) 555-35-35"],
    cityArray: ["Нью-Йорк"],
    imagesArray: [thanos]
  };

  componentDidMount() {
    localStorage.getItem("BostonGene-task-localstate") &&
      this.setState(
        JSON.parse(localStorage.getItem("BostonGene-task-localstate"))
      );
  }

  componentDidUpdate() {
    localStorage.setItem(
      "BostonGene-task-localstate",
      JSON.stringify(this.state)
    );
  }

  updateDataWithNewItem = value => {
    this.setState(previousState => ({
      headlinesArray: [value.headline, ...previousState.headlinesArray],
      descriptionsArray: [
        value.description,
        ...previousState.descriptionsArray
      ],
      phoneNumbersArray: [
        value.phoneNumber,
        ...previousState.phoneNumbersArray
      ],
      cityArray: [value.city, ...previousState.cityArray],
      imagesArray: [value.image, ...previousState.imagesArray]
    }));
  };

  updateDataWithDeletedItem = value => {
    this.setState({
      headlinesArray: this.state.headlinesArray.filter(
        (item, index) => index !== value.headlines.props.propfordeletingbyindex
      ),
      descriptionsArray: this.state.descriptionsArray.filter(
        (item, index) =>
          index !== value.descriptions.props.propfordeletingbyindex
      ),
      phoneNumbersArray: this.state.phoneNumbersArray.filter(
        (item, index) =>
          index !== value.phoneNumbers.props.propfordeletingbyindex
      ),
      cityArray: this.state.cityArray.filter(
        (item, index) => index !== value.cities.props.propfordeletingbyindex
      ),
      imagesArray: this.state.imagesArray.filter(
        (item, index) => index !== value.images.props.propfordeletingbyindex
      )
    });
  };

  render() {
    return (
      <div>
        <AdvertisementList
          updateDataWithDeletedItem={this.updateDataWithDeletedItem}
          data={this.state}
        />
        <AdvertisementForm updateDataWithNewItem={this.updateDataWithNewItem} />
      </div>
    );
  }
}

export default App;
