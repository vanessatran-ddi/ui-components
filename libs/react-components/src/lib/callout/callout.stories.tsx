import React from 'react';
import { GoACallout } from './callout';

export default {
  component: GoACallout,
  title: 'Component Library/Components/Callout',
  controls: { expanded: true },
  argTypes: {
    type: {
      description: 'The type of the callout, changes stylings and icons.',
      control: {
        type: 'select',
        options: ['important', 'information', 'event', 'emergency'],
      },
    },
    title: {
      description: 'The title of callout',
      control: {
        type: 'text',
      },
    },
    content: {
      description: 'description',
      control: {
        type: 'text',
      },
    },
  },
};

const content = <div>Information to the user goes in the content. Information can include <b>markup</b> as desired.</div>

const Template = (args) => <GoACallout {...args}>{content}</GoACallout>;

export const Variants = Template.bind({});

Variants.args = {
  type: 'information',
  title: 'Callout Title',
  content: ""
};