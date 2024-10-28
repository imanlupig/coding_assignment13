import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Sample text content.',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#000',
    disabled: false,
  },
};

export const DisabledText: Story = {
  args: {
    children: 'This text is disabled.',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#000',
    disabled: true, 
  },
};