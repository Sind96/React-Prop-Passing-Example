import Box1 from "./box1";
import { boxProps } from "./propsType";

export default function Box2(props: boxProps) {
  return (
    <div className="Box">
      <h2>
        Box 2 - <span>2nd child component</span>
      </h2>
      <Box1 user={props.user} count={props.count} />
    </div>
  );
}
