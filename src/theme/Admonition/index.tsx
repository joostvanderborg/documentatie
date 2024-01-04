import type { Props } from '@theme/Admonition';
import { Heading, SpotlightSection } from '@utrecht/component-library-react/dist/css-module';
import React, { type ComponentType } from 'react';

const map = {
  note: undefined,
  tip: 'info',
  info: 'info',
  warning: 'warning',
  danger: 'error',
};

// TODO: Make heading level dependent on context
export default function Admonition({ children, icon, title, type, ...props }: Props): JSX.Element {
  return (
    <SpotlightSection type={Object.prototype.hasOwnProperty.call(map, type) ? map[type] : undefined} {...props}>
      {title && (
        <Heading level={2}>
          {icon}
          {title}
        </Heading>
      )}
      {children}
    </SpotlightSection>
  );
}
