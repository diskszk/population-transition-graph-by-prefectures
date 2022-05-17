import { Meta } from "@storybook/react";
import { GRAPH_LINE_COLORS } from "../../constants";

export default {
  title: "Components/ColorCodes",
} as Meta;

export const ColorCodes = () => {
  const { borderColor, backgroundColor } = GRAPH_LINE_COLORS;

  return (
    <div>
      <div>
        {borderColor.map((color, key) => {
          return <ColorLine key={key} color={color} />;
        })}
      </div>
      <div>
        {backgroundColor.map((bgc, key) => {
          return <BackGroundColor key={key} bgc={bgc} />;
        })}
      </div>
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
const BackGroundColor: React.FC<{ bgc: string }> = ({ bgc }) => {
  return <div style={{ backgroundColor: bgc, height: "20px" }}></div>;
};
