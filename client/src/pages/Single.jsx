import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
            alt=""
          />

          <div className="info">
            <span>Vinny</span>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, modi
          ducimus. Iste doloremque voluptatem ex distinctio at maiores fuga sint
          totam veritatis impedit eos suscipit reprehenderit aut autem odit
          aliquid illo, vel numquam labore natus odio, excepturi consequatur.
          Necessitatibus, vitae, aliquid velit perferendis laborum, cum quisquam
          aperiam consequuntur magni debitis iste nam esse aut. Sequi
          reprehenderit quibusdam dolorum temporibus, sed at quaerat ab commodi
          neque ratione nobis sint minus debitis dolor! Magnam, soluta nesciunt
          tempore aliquam nisi natus fugit unde earum quo eveniet! Consequuntur
          aut blanditiis repellat nostrum quibusdam, voluptatem placeat eos
          accusantium tempora fuga autem, ex omnis illum quae quod sequi ipsum
          dolorum architecto dolor, id commodi exercitationem. Enim voluptatibus
          officiis modi maiores quis eius quae qui magni autem nisi, harum
          dignissimos. Officia totam blanditiis voluptates, veniam magnam aut
          libero sunt consequatur ratione earum unde placeat reprehenderit
          alias, eos ipsa nam nulla iste accusantium necessitatibus optio!
          Eveniet sunt, aspernatur velit et corporis veritatis aperiam delectus
          amet omnis vitae ea obcaecati maiores laudantium placeat facilis
          officia doloremque laboriosam voluptatem officiis error illum nam
          similique inventore. Odit, nam quam repellendus ab saepe quo ipsam
          recusandae, repellat unde ipsa magni voluptates, et pariatur adipisci
          sed quae nesciunt a velit fugit optio incidunt.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
