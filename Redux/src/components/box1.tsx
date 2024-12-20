import React from "react";

type box1Props = {
  count: number;
  user: {
    name: string;
    age: number;
  };
};

export default function Box1(props: box1Props) {
  const { name } = props.user;
  const { count } = props;

  return (
    <div className="box">
      <h2>
        Box 1 - <span>1st child component</span>
      </h2>
      <h4> GoodBye {name} </h4>
      <h4> The Final count is {count}</h4>
    </div>
  );
}
