import React from 'react';
import styles from './header.css';
import { Searchblock } from './Searchblock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  return (
		<header className={styles.header}>
			<Searchblock />
			<ThreadTitle />
			<SortBlock />
		</header>
  );
}
