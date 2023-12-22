import React from 'react';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/MDXComponents/A';
import clsx from 'clsx';
import '@utrecht/component-library-react/dist/css-module'; // Only use CSS injection

export default function MDXA({ className, ...props }: Props): JSX.Element {
  return <Link className={clsx('utrecht-link', 'utrecht-link--html-a', className)} {...props} />;
}
