import React from "react";
import { Meta, Story } from "@storybook/react";
import Switch, { SwitchProps } from "../components/Switch";

export default {
  title: "component/Switch",
  component: Switch,
  argTypes: {
    onChange: { action: "onChange", description: "returns a boolean value" },
  },
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};
