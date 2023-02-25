import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={``} alt="Img" />
        <div className="user">
          <img src={``} alt="Img" />
          <div className="info">
            <span>Vini</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Title</h1>
        <p>Post Desc</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
