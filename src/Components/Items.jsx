import React from "react";

const Items = (props) => {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.desc}
          </p>
          <a href={props.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Items;