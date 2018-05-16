import React, { Component } from "react";

import InputMask from "react-input-mask";

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};

class AdvertisementForm extends Component {
  state = {
    headline: "",
    description: "",
    phoneNumber: "",
    city: "Москва",
    image: null,
    //file inputs cannot be managed like other input types, so in order to reset it we have to use tricks
    key: ""
  };

  handleHeadlineChange = event => {
    this.setState({ headline: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handlePhoneNumberChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };

  imageSelectedHandler = event => {
    getBase64(event.target.files[0]).then(base64 => {
      this.setState({ image: base64 });
    });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    event.target.value = null;
    this.setState({
      headline: "",
      description: "",
      phoneNumber: "",
      city: "Москва",
      image: "null",
      key:
        "file inputs cannot be managed like other input types, so in order to reset it we have to use tricks"
    });
    this.props.updateDataWithNewItem(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <label htmlFor="headline-field">
          Наименование объявления:
          <textarea
            value={this.state.headline}
            onChange={this.handleHeadlineChange}
            id="headline-field"
            name="Headline"
            placeholder="Например, «делаю мир лучше»"
            maxLength="100"
            required
            autoFocus
          />
        </label>

        <label htmlFor="description-field">
          Описание объявления:<textarea
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            id="description-field"
            placeholder="Нужно описать очень подробно"
            name="description"
            maxLength="300"
          />
        </label>

        <div className="bottom-block-wrapper">
          <div className="element-inside-bottom-block-wrapper">
            <label htmlFor="phone-number-field">
              Номер телефона:
              <InputMask
                value={this.state.phoneNumber}
                onChange={this.handlePhoneNumberChange}
                id="phone-number-field"
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___) ___-__-__"
                required
                title="Введи номер телефона полностью"
              />
            </label>
          </div>
          <div className="element-inside-bottom-block-wrapper">
            <label htmlFor="city-select">
              Выберите город:<select
                value={this.state.city}
                onChange={this.handleCityChange}
                id="city-select"
              >
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Новосибирск">Новосибирск</option>
                <option value="Екатеринбург">Екатеринбург</option>
                <option value="Нижний Новгород">Нижний Новгород</option>
                <option value="Челябинск">Челябинск</option>
                <option value="Омск">Омск</option>
                <option value="Самара">Самара</option>
                <option value="Казань">Казань</option>
                <option value="Ростов-на-Дону">Ростов-на-Дону</option>
                <option value="Уфа">Уфа</option>
                <option value="Красноярск">Красноярск</option>
                <option value="Пермь">Пермь</option>
                <option value="Воронеж">Воронеж</option>
                <option value="Волгоград">Волгоград</option>
              </select>
            </label>
          </div>
          <div className="element-inside-bottom-block-wrapper">
            <label htmlFor="upload-image">
              Загрузите фотографию:<input
                onChange={this.imageSelectedHandler}
                id="imageFile"
                type="file"
                //file inputs cannot be managed like other input types, so in order to reset it we have to use tricks
                key={this.state.key}
                name="imageFile"
                accept="image/*"
              />
            </label>
          </div>

          <button type="submit" value="submit">
            отправить
          </button>
        </div>
      </form>
    );
  }
}

export default AdvertisementForm;
