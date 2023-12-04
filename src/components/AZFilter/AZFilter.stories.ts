import type { Meta, StoryObj } from "@storybook/react";
import AZFilter from "./AZFilter";

const meta = {
  title: "atom/AZFilter",
  component: AZFilter,
  parameters: {
    layout: "centered",
  }
} satisfies Meta<typeof AZFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

const authorList = [
  {
    id: 1,
    createdAt: new Date("2023-11-18T15:10:04.003Z"),
    updatedAt: new Date("2023-11-18T15:10:04.003Z"),
    name: "Isaac Asimov",
    slug: "isaac-asimov",
    thumbnail: "asimov.jpg",
  },
  {
    id: 2,
    createdAt: new Date("2023-11-18T15:10:04.003Z"),
    updatedAt: new Date("2023-11-18T15:10:04.003Z"),
    name: "Jane Asutin",
    slug: "jane-austin",
    thumbnail: "jane-austin.jpeg",
  },
  {
    id: 3,
    createdAt: new Date("2023-11-18T15:10:04.003Z"),
    updatedAt: new Date("2023-11-18T15:10:04.003Z"),
    name: "Andrew Jackson",
    slug: "jane-austin",
    thumbnail: "",
  },
  {
    id: 4,
    createdAt: new Date("2023-11-18T15:10:04.003Z"),
    updatedAt: new Date("2023-11-18T15:10:04.003Z"),
    name: "Charles Darwin",
    slug: "jane-austin",
    thumbnail: "",
  },
  {
    id: 5,
    createdAt: new Date("2023-11-18T15:10:04.003Z"),
    updatedAt: new Date("2023-11-18T15:10:04.003Z"),
    name: "Charles Wayne",
    slug: "jane-austin",
    thumbnail: "",
  },
];

export const Default: Story = {
  args: { authorName: authorList },
};
