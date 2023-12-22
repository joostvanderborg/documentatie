import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocRoot/Layout/Sidebar/ExpandButton';
import IconArrow from '@theme/Icon/Arrow';
import { LinkButton } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import styles from './styles.module.css';

export default function DocRootLayoutSidebarExpandButton({ toggleSidebar }: Props): JSX.Element {
  return (
    <LinkButton
      className={styles.expandButton}
      aria-label={translate({
        id: 'theme.docs.sidebar.expandButtonAriaLabel',
        message: 'Expand sidebar',
        description: 'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      onClick={toggleSidebar}
    >
      <IconArrow className={styles.expandButtonIcon} />
    </LinkButton>
  );
}
