import React from 'react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = () => <Button label="Primary Button" variant="primary" />;
export const Secondary = () => <Button label="Secondary Button" variant="secondary" />;