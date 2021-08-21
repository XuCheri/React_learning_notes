/*
 * @Author: your name
 * @Date: 2021-08-21 14:42:45
 * @LastEditTime: 2021-08-21 22:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo3\src\components\BallList.js
 */
import React, { Component } from "react";
import getRandom from "../utils/getRandom";
import Ball from "./Ball";

export default class BallList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BallListInfo: [],
    };
    setInterval(() => {
      const info = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        bg: `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
          0,
          255
        )},${getRandom(0, 1)})`,
        xSpeed: getRandom(50, 200),
        ySpeed: getRandom(50, 200),
      };
      this.setState({
        BallListInfo: [...this.state.BallListInfo, info],
      });
    }, 1000);
  }

  render() {
    const BallList = this.state.BallListInfo.map((item, index) => (
      <Ball key={index} {...item} />
    ));
    return <>{BallList}</>;
  }
}
