/*
 * @Author: your name
 * @Date: 2021-09-07 16:39:55
 * @LastEditTime: 2021-09-07 16:41:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo4\src\component\Student.js
 */
import React from "react";

export default function Student({ name, sex, birth }) {
  return (
    <li>
      【姓名】{name}
      【性别】{sex === 1 ? "男" : "女"}
      【出生年份】{birth}
    </li>
  );
}
