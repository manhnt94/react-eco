import React from "react";

export default function Message(props) {
  return (
    <div className={`${props.error ? "bg-red-500" : "bg-green-400"} `}>
      {props.children}
    </div>
  );
}
