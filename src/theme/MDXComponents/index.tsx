import Head from '@docusaurus/Head';
import Admonition from '@theme/Admonition';
import type { MDXComponentsObject } from '@theme/MDXComponents';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import Mermaid from '@theme/Mermaid';
import MDXDetails from '@theme-original/MDXComponents/Details';
import {
  Code,
  Emphasis,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  OrderedList,
  OrderedListItem,
  Paragraph,
  Separator,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { isValidElement } from 'react';
import React from 'react';

const MDXComponents: MDXComponentsObject = {
  Head,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: Code,
  a: MDXA,
  pre: MDXPre,
  ul: ({ children }) => (
    <UnorderedList>
      {children
        .filter((item) => isValidElement(item))
        .map(({ props }, index) => (
          <UnorderedListItem key={index} {...props} />
        ))}
    </UnorderedList>
  ),
  em: Emphasis,
  strong: Strong,
  img: ({ ...props }) => <Image loading="lazy" {...props} />,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  hr: Separator,
  p: Paragraph,
  ol: ({ children }) => (
    <OrderedList>
      {children
        .filter((item) => isValidElement(item))
        .map(({ props }, index) => (
          <OrderedListItem key={index} {...props} />
        ))}
    </OrderedList>
  ),
  admonition: Admonition,
  adminitiontitle: ({ children }) => <h1>{children}</h1>,
  mermaid: Mermaid,
};

export default MDXComponents;
