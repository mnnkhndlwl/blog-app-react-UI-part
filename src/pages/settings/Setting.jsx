import React from "react";
import "./setting.css";
import Sidebar from "../../sidebar/sidebar";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://cdn.pixabay.com/photo/2017/08/21/16/03/henry-cavill-2665842_960_720.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display : "none"}} ></input>
            </div>
            <label>Username</label>
          <input type="text" placeholder="manan" name="name" />
          <label>Email</label>
          <input type="email" placeholder="manan@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar /> {/**importing sidebar here */}
    </div>
  );
}
