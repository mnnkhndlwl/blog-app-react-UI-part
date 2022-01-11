import React from "react";
import "./write.css";
export default function Write() {
  return (
    <div className="write">
      <img src="https://cdn.pixabay.com/photo/2021/11/17/17/03/roses-6804169_960_720.jpg" alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fal fa-file-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}
