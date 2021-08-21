/*
 * @Author: your name
 * @Date: 2021-08-21 14:43:28
 * @LastEditTime: 2021-08-21 15:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo3\src\utils\getCommon.js
 */
export default function getRandom(min,max){
    return Math.random()*(max-min+1)+min;
}