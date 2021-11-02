import React from "react";
import Dots from "../Dots";

import styles from "./GroupedDots.module.css";

interface GroupedDotsProps {
	numbers: string[] | null;
}

export default function GroupedDots({ numbers }: GroupedDotsProps) {
	return (
		<div className={styles.grouped_flex}>
			{numbers
				? numbers.map((item) => {
						return <Dots text={item} key={String(item)} />;
				})
				: null}
		</div>
	);
}
