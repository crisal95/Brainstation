import React, { Component } from "react";
import "./heroesList.css";
import ImgCard from "../imgCard/imgCard";

class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: "",
      heroInfo: "",
    };
  }

  setHeroInfo(item) {
    this.setState({ eInfo: item });
  }

  getCardInfo(hero) {
    var data = {
      imgSource: hero.images.md,
      title: hero.name,
    };
    return data;
  }

  getHeroInfo(hero) {
    var data = {
      name: hero.name,
      biography: hero.biography,
      appearance: hero.appearance,
      images: hero.images,
    };
    return data;
  }

  render() {
    var cardsAmount = this.props.amount;
    var data = this.props.data;
    return data ? (
      <div>
        <p className="counter">Amount of characters after filtering: {cardsAmount}</p>

        <div className="heroes-container">
          {data.map((item, index) => (
            <div key={item.id} className="item">
              <ImgCard
                data={this.getCardInfo(item)}
                heroInfo={this.getHeroInfo(item)}
               elemIndex={index}
              />
            </div>
          ))}
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default HeroesList;
