import React from "react";

export function Input(props) {
  return (
    <div className="form-group" style={{ marginTop: "10px"}}>
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: "10px" }} className="btn btn-success">
      {props.children}
    </button>
  );
}
