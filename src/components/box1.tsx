import Box2 from "./box2";
import { boxProps } from "./propsType";

export default function Box1(props: boxProps) {
  const { name } = props.user;

  return (
    <div className="border-4 border-blue-500 rounded-md p-4 mt-4 ">
      <h2 className="font-bold text-lg">
        Box 1 - <span>1st Child Component</span>
      </h2>
      <h3 className="my-2"> Hello, {name || "Guest"}! </h3>
      <Box2 {...props} />
    </div>
  );
}