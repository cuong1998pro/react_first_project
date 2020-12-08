import React, { Component } from "react";
import MyButton from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi expedita ipsum quae similique assumenda blanditiis exercitationem illo optio voluptatibus eaque vel corrupti quos aperiam nihil est, fugiat enim rerum.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorum commodi voluptate! Eum ipsum saepe commodi consequuntur velit. Blanditiis id, beatae molestias ut nulla voluptatibus deserunt voluptatum? Omnis, pariatur accusantium.",
      "Lorem  Numquam dolorum commodi voluptate! Eum ipsum saepe commodi consequuntur velit. Blanditiis id, beatae molestias ut nulla voluptatibus deserunt voluptatum? Omnis, pariatur accusantium",
    ],
    linkto: ["http://sales/b", "http://google.com", "http://google.com"],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="white"
                link={this.state.linkto[i]}
              ></MyButton>
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
