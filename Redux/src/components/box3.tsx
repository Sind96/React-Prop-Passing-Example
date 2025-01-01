import Box4 from "./box4";
import { boxProps } from "./propsType";

export default function Box3(props: boxProps) {
  return (
    <div className="border-4 border-white rounded-md p-2 mt-2">
      <h2>
        Box 3 - <span>3rd Child Component</span>
      </h2>
      <Box4 user={props.user} count={props.count} />
    </div>
  );
}
