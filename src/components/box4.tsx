import { boxProps } from "../types/type.ts";

const Box4 = (props: boxProps) => {
  const { name } = props.user;
  const { count } = props;

  return (
    <div className="border-4 border-purple-500 rounded-md p-4 mt-4">
      <h2 className="font-bold text-lg">
        Box 4 - <span>4th Child Component</span>
      </h2>
      <h3 className="mt-2">Goodbye, {name || "Guest"}!</h3>
      <h4 className="mt-2">The Final Count Is {count}!</h4>
    </div>
  );
};

export default Box4;
