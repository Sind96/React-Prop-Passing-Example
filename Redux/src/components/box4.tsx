import { boxProps } from "./propsType";

export default function Box4(props: boxProps) {
  const { name } = props.user;
  const count = props.count;

  return (
    <div className="border-4 border-white rounded-md p-2 mt-2">
      <h2>
        Box 4 - <span>4th Child Component</span>
      </h2>
      <h3>Goodbye {name}</h3>
      <h4>The Final Count Is {count}!</h4>
    </div>
  );
}
