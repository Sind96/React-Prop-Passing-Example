import Box3 from "./Box3.tsx";
import { boxProps } from "../types/type.ts";

const Box2 = (props: boxProps) => {
  const { age } = props.user;

  return (
    <div className="border-4 border-green-500 rounded-md p-4 mt-4">
      <h2 className="font-bold text-lg">
        Box 2 - <span>2nd Child Component</span>
      </h2>
      <h3 className="mt-2">
        {age > 0 ? `You are ${age} years old` : "We don't know your age yet!"}
      </h3>
      <Box3 {...props} />
    </div>
  );
};

export default Box2;
