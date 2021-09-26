/*
 * @Author: your name
 * @Date: 2021-09-25 13:05:24
 * @LastEditTime: 2021-09-26 18:00:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo5\src\components\common\Modal\index.js
 */
import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render(props) {
    var defaultProps = {
      bg: "rgba(0,0,0,.5)",
    };
    var datas = Object.assign({}, defaultProps, this.props);
    return (
      <div
        onClick={e=>{
            if(e.target.className==="modal"){
                datas.onClose();
            }
        }}
        className="modal"
        style={{
          background: datas.bg,
        }}
      >
        <div className="modal-center">{datas.children}</div>
      </div>
    );
  }
}
