import React from "react";

import styles from "./ContestShow.module.css";

interface ContestProps {
	date: string;
	contestId: string | number;
}

export function ContestShow({ contestId, date }: ContestProps) {
	return (
		<div className={styles.row}>
			<h3 className={styles.header}>Concurso</h3>
			<p className={styles.paragraph}>
				{contestId} – {date}
			</p>
		</div>
	);
}
