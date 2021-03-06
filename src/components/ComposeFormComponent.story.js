import React from 'react';
import { storiesOf } from '@storybook/react';
import ComposeFormComponent from './ComposeFormComponent';
import './ComposeFormComponent.story.css';

storiesOf('ComposeFormComponent', module).add('Happy path', () =>
  <ComposeFormComponent
    onSubmit={ids => console.log(ids)}
    onCancel={a => console.log(a)}
  />
);
