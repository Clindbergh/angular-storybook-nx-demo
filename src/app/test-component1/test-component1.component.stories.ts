import type { Meta, StoryObj } from '@storybook/angular';
import { TestComponent1Component } from './test-component1.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TestComponent1Component> = {
  component: TestComponent1Component,
  title: 'TestComponent1Component',
};
export default meta;
type Story = StoryObj<TestComponent1Component>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/test-component1 works!/gi)).toBeTruthy();
  },
};
