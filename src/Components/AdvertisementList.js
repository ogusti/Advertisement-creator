import React, { Component } from "react";

class AdvertisementList extends Component {
  handleOnDeleteCard = event => {
    this.props.updateDataWithDeletedItem(event);
  };

  render() {
    // Turn all obtained arrays into elements for cards

    const headlines = this.props.data.headlinesArray.map((headline, index) => (
      <h2
        key={`headline-${index}`}
        propfordeletingbyindex={index}
        className="phoneNumber-in-card"
      >
        {headline}
      </h2>
    ));

    const descriptions = this.props.data.descriptionsArray.map(
      (description, index) => (
        <p key={`description-${index}`} propfordeletingbyindex={index}>
          {description}
        </p>
      )
    );

    const phoneNumbers = this.props.data.phoneNumbersArray.map(
      (phoneNumber, index) => (
        <span
          key={`phoneNumber-${index}`}
          propfordeletingbyindex={index}
          className="phoneNumber-in-card"
        >
          {phoneNumber}
        </span>
      )
    );

    const cities = this.props.data.cityArray.map((city, index) => (
      <span
        propfordeletingbyindex={index}
        key={`city-${index}`}
        className="city-in-card"
      >
        {city}
      </span>
    ));

    const images = this.props.data.imagesArray.map((image, index) => (
      <img
        alt="visual description"
        key={`image-${index}`}
        propfordeletingbyindex={index}
        className="image-in-card"
        src={image}
      />
    ));

    //Create array of objects
    const toArrayOfObjects = headlines.map((item, index) => ({
      headlines: headlines[index],
      descriptions: descriptions[index],
      phoneNumbers: phoneNumbers[index],
      cities: cities[index],
      images: images[index]
    }));

    //Create an array of cards from an array of objects
    const renderArrayOfObjects = toArrayOfObjects.map((item, key) => (
      <li key={`item-in-array-of-object-${key}`}>
        {item.images}
        {item.headlines}
        {item.descriptions}
        <div className="bottom-of-card">
          {item.cities}
          {item.phoneNumbers}
        </div>
        <span
          role="img"
          aria-label="close-emoji"
          onClick={() => this.handleOnDeleteCard(item)}
          className="deleteCardSymbol"
        >
          ✖️
        </span>
      </li>
    ));

    return (
      <section>
        <ul>{renderArrayOfObjects}</ul>
      </section>
    );
  }
}

export default AdvertisementList;
