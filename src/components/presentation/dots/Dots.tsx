import React from 'react'

import styles from './Dots.module.css';

interface DotsProps {
	text: string;
}

export default function Dots({ text }: DotsProps) {
	return (
		<div className={styles.dot}>
			<p className={styles.dot_text}>{text}</p>
		</div>
	);
}
