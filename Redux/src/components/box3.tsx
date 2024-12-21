import Box2 from "./box2";

export default function Box3(props) {
  const { age } = props.user;

  return (
    <div className="box">
      <h2>
        Box 3 - <span>3rd child component</span>
      </h2>
      <h3>You are {age} years old</h3>
      <Box2 user={props.user} count={props.count} />
    </div>
  );
}
