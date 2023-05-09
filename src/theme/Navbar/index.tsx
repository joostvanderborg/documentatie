import React from 'react';
import type NavbarType from '@theme/Navbar';
import type { WrapperProps } from '@docusaurus/types';
import { PageHeader } from '@utrecht/component-library-react';
import { NLDSLogo } from '@site/src/components/NLDSLogo';
import { MainNav } from '@site/src/components/MainNav';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): JSX.Element {
  return (
    <PageHeader style={{ zIndex: 1 }}>
      <NLDSLogo />
      <MainNav />
    </PageHeader>
  );
}
