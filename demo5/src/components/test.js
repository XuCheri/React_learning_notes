/*
 * @Author: your name
 * @Date: 2021-09-25 13:05:18
 * @LastEditTime: 2021-09-26 17:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo5\src\components\tets.js
 */
import React, { Component } from "react";
import Modal from "./common/Modal";

export default class test extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        {this.state.showModal ? (
          <Modal onClose={this.hideModal} bg="rgba(255,0,0,.3)">
            <h1>Cheri</h1>
            <button onClick={this.hideModal}>关闭蒙层</button>
          </Modal>
        ) : null}
        <button onClick={this.showModal}>显示蒙层</button>
      </div>
    );
  }
}
