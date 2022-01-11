// again as usual rfc ye to permanent hai bhai
// i have imported this side bar in setting page
import React from "react";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://media.istockphoto.com/vectors/older-men-thinking-about-life-plan-cash-home-asset-management-vector-id1280751744"
      
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          obcaecati cumque placeat officia.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">History</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Science</li>
          <li className="sidebarListItem">AI</li>
          <li className="sidebarListItem">Pop Culture</li>
          <li className="sidebarListItem">Financial</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
