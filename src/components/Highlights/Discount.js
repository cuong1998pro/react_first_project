import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../UI/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tiket from 20th JUNE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                aut sunt reprehenderit, deserunt impedit soluta ipsa corporis
                dignissimos quod atque aspernatur, assumenda itaque optio?
                Pariatur voluptate adipisci eveniet quam aut!
              </p>
              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              ></MyButton>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
