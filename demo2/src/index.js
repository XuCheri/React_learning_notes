/*
 * @Author: your name
 * @Date: 2021-08-18 17:12:21
 * @LastEditTime: 2021-08-19 13:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo2\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StudentsList from "./components/StudentsList";
var url =
  "https://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249";
async function getData() {
  const students = await fetch(url)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
  return students;
}

async function render() {
  ReactDOM.render(
    <div>正在加载中......</div>,
    document.getElementById("root")
  );
  const stus = await getData();
  ReactDOM.render(
    <StudentsList stus={stus} />,
    document.getElementById("root")
  );
}
render();

// const students = {
//   status: "success",
//   data: [
//     {
//       id: 1,
//       name: "郑浩然",
//       birth: 2001,
//       sex: 1,
//       sNo: "11009",
//       email: "577798856@qq.com",
//       phone: "18807289450",
//       address: "湖北省十堰市东岳山庄",
//       appkey: "demo13_1545210570249",
//       ctime: 1547190636,
//       utime: 1547190636,
//     },
//     {
//       id: 2,
//       name: "郑浩然",
//       birth: 2001,
//       sex: 1,
//       sNo: "11009",
//       email: "577798856@qq.com",
//       phone: "18807289450",
//       address: "湖北省十堰市东岳山庄",
//       appkey: "demo13_1545210570249",
//       ctime: 1547190636,
//       utime: 1547190636,
//     },
//     {
//       id: 3,
//       name: "郑浩然",
//       birth: 2001,
//       sex: 1,
//       sNo: "11009",
//       email: "577798856@qq.com",
//       phone: "18807289450",
//       address: "湖北省十堰市东岳山庄",
//       appkey: "demo13_1545210570249",
//       ctime: 1547190636,
//       utime: 1547190636,
//     },
//     {
//       id: 4,
//       name: "郑浩然",
//       birth: 2001,
//       sex: 1,
//       sNo: "11009",
//       email: "577798856@qq.com",
//       phone: "18807289450",
//       address: "湖北省十堰市东岳山庄",
//       appkey: "demo13_1545210570249",
//       ctime: 1547190636,
//       utime: 1547190636,
//     },
//     {
//       id: 5,
//       name: "郑浩然",
//       birth: 2001,
//       sex: 1,
//       sNo: "11009",
//       email: "577798856@qq.com",
//       phone: "18807289450",
//       address: "湖北省十堰市东岳山庄",
//       appkey: "demo13_1545210570249",
//       ctime: 1547190636,
//       utime: 1547190636,
//     },
//   ],
// };
