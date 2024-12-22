import Box3 from "./box3";
import { boxProps } from "./propsType";

export default function Box4(props: boxProps) {
  const { name } = props.user;

  return (
    <div className="box">
      <h2>
        Box 4 - <span>4th child component</span>
      </h2>
      <h3>Hello {name} </h3>
      <Box3 user={props.user} count={props.count} />
    </div>
  );
}
