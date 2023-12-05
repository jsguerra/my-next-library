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

export const Default: Story = {
  args: { rootPath: "path-name" },
};
