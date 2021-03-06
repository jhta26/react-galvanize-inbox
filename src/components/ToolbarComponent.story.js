import React from 'react';
import { storiesOf } from '@storybook/react';
import ToolbarComponent from './ToolbarComponent';
import './ToolbarComponent.story.css';
var messages = [
  {
    id: 1,
    subject:
      "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: true,
    labels: ['dev', 'personal']
  },
  {
    id: 2,
    subject:
      "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 3,
    subject:
      'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    read: false,
    starred: true,
    labels: ['dev']
  },
  {
    id: 4,
    subject: 'We need to program the primary TCP hard drive!',
    read: true,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 5,
    subject:
      'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    read: false,
    starred: false,
    labels: ['personal']
  },
  {
    id: 6,
    subject: 'We need to back up the wireless GB driver!',
    read: true,
    starred: true,
    labels: []
  },
  {
    id: 7,
    subject: 'We need to index the mobile PCI bus!',
    read: true,
    starred: false,
    labels: ['dev', 'personal']
  },
  {
    id: 8,
    subject:
      'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    read: true,
    starred: true,
    labels: []
  }
];
storiesOf('ToolbarComponent', module)
  .add('Happy path', () =>
    <ToolbarComponent
      messages={messages}
      selectedMessageCount={3}
      onOpenComposeForm={a => console.log(a)}
      onSelectAllMessages={a => console.log(a)}
      onDeselectAllMessages={a => console.log(a)}
      onDeleteSelectedMessages={a => console.log(a)}
      onMarkAsReadSelectedMessages={a => console.log(a)}
      onMarkAsUnreadSelectedMessages={a => console.log(a)}
      onApplyLabelSelectedMessages={a => console.log(a)}
      onRemoveLabelSelectedMessages={a => console.log(a)}
    />
  )
  .add('no selected messages', () =>
    <ToolbarComponent
      messages={messages}
      selectedMessageCount={0}
      onOpenComposeForm={a => console.log(a)}
      onSelectAllMessages={a => console.log(a)}
      onDeselectAllMessages={a => console.log(a)}
      onDeleteSelectedMessages={a => console.log(a)}
      onMarkAsReadSelectedMessages={a => console.log(a)}
      onMarkAsUnreadSelectedMessages={a => console.log(a)}
      onApplyLabelSelectedMessages={a => console.log(a)}
      onRemoveLabelSelectedMessages={a => console.log(a)}
    />
  )
  .add('all selected messages', () =>
    <ToolbarComponent
      messages={messages}
      selectedMessageCount={messages.length}
      onOpenComposeForm={a => console.log(a)}
      onSelectAllMessages={a => console.log(a)}
      onDeselectAllMessages={a => console.log(a)}
      onDeleteSelectedMessages={a => console.log(a)}
      onMarkAsReadSelectedMessages={a => console.log(a)}
      onMarkAsUnreadSelectedMessages={a => console.log(a)}
      onApplyLabelSelectedMessages={a => console.log(a)}
      onRemoveLabelSelectedMessages={a => console.log(a)}
    />
  );
