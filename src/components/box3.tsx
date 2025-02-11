import Box4 from "./Box4.js";
import { boxProps } from "./propsType.js";

const Box3 = (props: boxProps) => {
  return (
    <div className="border-4 border-yellow-500 rounded-md p-4 mt-4">
      <h2 className="font-bold text-lg">
        Box 3 - <span>3rd Child Component</span>
      </h2>
      <Box4 {...props} />
    </div>
  );
};

export default Box3;
