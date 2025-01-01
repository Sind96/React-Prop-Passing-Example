import Box3 from "./box3";
import { boxProps } from "./propsType";

export default function Box2(props: boxProps) {
  const { age } = props.user;

  return (
    <div className="border-4 border-white rounded-md p-2 mt-2">
      <h2>
        Box 2 - <span>2nd Child Component</span>
      </h2>
      <h3>You are {age} years old</h3>
      <Box3 user={props.user} count={props.count} />
    </div>
  );
}
