//import it in single.jsx
import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://image.cnbcfm.com/api/v1/image/106926992-1628885077267-elon.jpg?v=1639409610&w=929&h=523"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-file-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Manan</b>
          </span>
          <span className="singlePostDate">69 hours ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aut
          aperiam laudantium quas nobis dicta numquam quam atque molestiae
          facere. Eum temporibus ipsam autem voluptates. Asperiores beatae vel
          id nesciunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aut
          aperiam laudantium quas nobis dicta numquam quam atque molestiae
          facere. Eum temporibus ipsam autem voluptates. Asperiores beatae vel
          id nesciunt!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aut
          aperiam laudantium quas nobis dicta numquam quam atque molestiae
          facere. Eum temporibus ipsam autem voluptates. Asperiores beatae vel
          id nesciunt!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aut
          aperiam laudantium quas nobis dicta numquam quam atque molestiae
          facere. Eum temporibus ipsam autem voluptates. Asperiores beatae vel
          id nesciunt!
        </p>
      </div>
    </div>
  );
}
