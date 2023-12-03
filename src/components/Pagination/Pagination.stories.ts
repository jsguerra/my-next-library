import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta = {
  title: "atom/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 1,
    pages: 5,
  },
};

export const Short: Story = {
  args: {
    page: 2,
    pages: 3,
  },
};

export const Long: Story = {
  args: {
    page: 1,
    pages: 25,
  },
};
