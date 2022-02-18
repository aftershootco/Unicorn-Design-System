import React from "react";
import Button, { ButtonProps } from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  size: "medium",
  onClick: () => {},
  variant: "primary",
};
