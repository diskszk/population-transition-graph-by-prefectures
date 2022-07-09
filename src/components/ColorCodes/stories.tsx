import { Meta } from "@storybook/react";
import { GRAPH_LINE_COLORS } from "../../constants";

export default {
  title: "Components/ColorCodes",
} as Meta;

export const ColorCodes = () => {
  return (
    <div>
      {GRAPH_LINE_COLORS.map((color, key) => {
        return <ColorLine key={key} color={color} />;
      })}
    </div>
  );
};

const ColorLine: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      color: {color}
    </div>
  );
};
