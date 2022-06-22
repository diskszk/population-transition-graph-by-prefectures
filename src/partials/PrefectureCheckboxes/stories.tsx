import { ComponentStoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { Prefecture } from "../../types";
import { PrefectureCheckboxes } from "./PrefectureCheckboxes";

const meta: Meta = {
  title: "Partials/CheckBoxList",
  component: PrefectureCheckboxes,
};

export default meta;

type Props = ComponentProps<typeof PrefectureCheckboxes>;
const prefecture: Prefecture = {
  prefCode: 1,
  prefName: "北海道",
  populations: [],
};

const props: Props = {
  prefectures: [...Array(47)].map(() => prefecture),
};

export const CheckBoxList: ComponentStoryObj<typeof PrefectureCheckboxes> = {
  decorators: [
    (Story) => {
      return (
        <QueryClientProvider client={new QueryClient()}>
          <GlobalStyle />
          <Story />
        </QueryClientProvider>
      );
    },
  ],
  args: props as Props,
};
