/*
 * @Author: your name
 * @Date: 2021-09-06 21:24:14
 * @LastEditTime: 2021-09-07 16:45:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo4\src\component\Pager2.js
 */
import React from "react";
import "./Pager.css";
export default function Pager2(props) {
  const PageNumber = Math.ceil(props.total / props.limit);
  if (PageNumber === 0) {
    return null;
  }
  const min = getMinNumber(props);
  const max = getMaxNumber(props);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(
      <span
        key={i}
        onClick={() => {
          toPage(i, props);
        }}
        className={i === props.current ? "item active" : "item"}
      >
        {i}
      </span>
    );
  }

  function toPage(target, props) {
    if (props.current === target) {
      return;
    }
    props.onPageChange && props.onPageChange(target);
  }

  function getMinNumber(props) {
    return props.current - Math.floor(props.panelNumber / 2) < 1
      ? 1
      : props.current - Math.floor(props.panelNumber / 2) >
        PageNumber - props.panelNumber + 1
      ? PageNumber - props.panelNumber + 1
      : props.current - Math.floor(props.panelNumber / 2);
  }

  function getMaxNumber(props) {
    return min + props.panelNumber - 1 > PageNumber
      ? PageNumber
      : min + props.panelNumber - 1;
  }

  return (
    <>
      <span
        onClick={() => {
          toPage(1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        首页
      </span>
      <span
        onClick={() => {
          if (props.current - 1 <= 0) {
            return;
          }
          toPage(props.current - 1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        上一页
      </span>
      {numbers}
      <span
        onClick={() => {
          if (props.current + 1 > PageNumber) {
            return;
          }
          toPage(props.current + 1, props);
        }}
        className={props.current === PageNumber ? "item disabled" : "item"}
      >
        下一页
      </span>
      <span
        onClick={() => {
          toPage(PageNumber, props);
        }}
        className={props.current === PageNumber ? "item disabled" : "item"}
      >
        尾页
      </span>
      <span className="current">{props.current}</span>/<span>{PageNumber}</span>
    </>
  );
}
