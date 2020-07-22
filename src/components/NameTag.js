import React from 'react';
import styles from './NameTag.module.css';
export default function NameTag({ name = 'modcorp' }) {
	return (
		<div className={styles.nameTag}>
			<h1>{name}</h1>
		</div>
	);
}
