// we are calling this post components in our posts

import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        src="https://media.istockphoto.com/vectors/business-man-holding-a-bitcoin-bubble-is-about-to-fall-on-the-ground-vector-id1304053695"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">XYz</span>
          <span className="postCat">XYz2</span>
        </div>
        <span className="postTitle">Lorem ipsum</span>
        <hr />
        <span className="postDate">69 hours ago</span>
      </div>
      <p className="postDesc"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro
        accusamus sequi ducimus pariatur fuga repellendus, ad magnam vero sit
        numquam facilis quam consequuntur magni voluptate, maiores reprehenderit
        optio tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro
        accusamus sequi ducimus pariatur fuga repellendus, ad magnam vero sit
        numquam facilis quam consequuntur magni voluptate, maiores reprehenderit
        optio tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro
        accusamus sequi ducimus pariatur fuga repellendus, ad magnam vero sit
        numquam facilis quam consequuntur magni voluptate, maiores reprehenderit
        optio tenetur.
      </p>
    </div>
  );
}
