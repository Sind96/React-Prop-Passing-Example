import Box2 from "./box2";
import { boxProps } from "./propsType";

export default function Box1(props: boxProps) {
  const { name } = props.user;

  return (
    <div className="border-4 border-white rounded-md p-2 mt-2">
      <h2>
        Box 1 - <span>1st Child Component</span>
      </h2>
      <h3> Hello {name} </h3>
      <Box2 user={props.user} count={props.count} />
    </div>
  );
}
