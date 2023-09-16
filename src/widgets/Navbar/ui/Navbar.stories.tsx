import type { Meta, StoryObj } from "@storybook/react";
import Navbar  from "./Navbar";

// TODO!! not working
// Error: Right side of assignment cannot be destructured

const meta = {
  title: "widget/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const testNavbar: Story = {
  args: {

  },

};
