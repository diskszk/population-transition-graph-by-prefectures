import { ComponentMeta } from "@storybook/react";
import { PopulationLineGraph } from "./PopulationLineGraph";

export default {
  title: "Partials/PopulationLineGraph",
  component: PopulationLineGraph,
} as ComponentMeta<typeof PopulationLineGraph>;

// const prefectures: Prefecture[] = [
//   {
//     prefCode: 1,
//     prefName: "北海道",
//     populations: [
//       {
//         year: 1960,
//         value: 10,
//       },
//       {
//         year: 1970,
//         value: 100,
//       },
//       {
//         year: 1980,
//         value: 200,
//       },
//       {
//         year: 1990,
//         value: 300,
//       },
//       {
//         year: 2000,
//         value: 400,
//       },
//       {
//         year: 2010,
//         value: 500,
//       },
//       {
//         year: 2020,
//         value: 600,
//       },
//       {
//         year: 2030,
//         value: 700,
//       },
//     ],
//   },
//   {
//     prefCode: 2,
//     prefName: "青森県",
//     populations: [
//       {
//         year: 1960,
//         value: 20,
//       },
//       {
//         year: 1970,
//         value: 200,
//       },
//       {
//         year: 1980,
//         value: 300,
//       },
//       {
//         year: 1990,
//         value: 400,
//       },
//       {
//         year: 2000,
//         value: 500,
//       },
//       {
//         year: 2010,
//         value: 600,
//       },
//       {
//         year: 2020,
//         value: 700,
//       },
//       {
//         year: 2030,
//         value: 800,
//       },
//     ],
//   },
// ];

export const View = () => {
  return <PopulationLineGraph />;
};
