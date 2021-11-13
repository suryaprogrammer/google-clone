// import react from 'react';
import React from "react";
import reactDom from "react-dom";
import hhh from "../img/hhh.png";
import g from '../../src/img/g.jpg'
// function run() {
//   document.getElementById("nav").style.backgroundColor = "orange";
// }
// const walk = () => {
//   // document.getElementById("nav").style.backgroundColor ="#61dafb";
//   //    let newsec =  react.createElement("section", {id:"new"},"kjb");
    //   reactDom.render(<nav/>,document.getElementById("k"));
// };
const Nav = () => {
  return (
    <>
      <nav id="nav">
        <div className="mainnav">
          <ul>
            <li>
              <a href="#">Gmail</a>
            </li>
            <li>
              {" "}
              <a href="#">Images</a>
            </li>

            <li>
              <a href="#">
            <div id="dot"><img src="https://img.icons8.com/windows/32/000000/menu-2.png"/><img src="https://img.icons8.com/windows/32/000000/menu-2.png"/><img src="https://img.icons8.com/windows/32/000000/menu-2.png"/></div>
              </a>
            </li>
            <li id="l4">
              <a href="#">
                <img id="g" src={g} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
