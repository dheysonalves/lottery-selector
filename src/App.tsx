import React from 'react';
import styles from './App.module.css';
import { selectLottery } from './app/components/lottery/lotterySlice';
import { useAppSelector } from './app/hooks';
import { SelectLottery } from './components/behavior/selectLottery/SelectLottery';
import { ContestShow } from './components/presentation';

function App() {
	const { contestData } = useAppSelector(selectLottery);

  return (
		<div className={styles.App}>
			<div className={styles.wrapper}>
				<div className={styles.bggreen}>
					<SelectLottery />
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Veritatis error officia, neque distinctio earum facilis ad nostrum
							beatae minus sint eaque ea dolore ex assumenda blanditiis
							doloribus pariatur ratione suscipit.
						</p>
					</div>
					<ContestShow contestId={contestData?.id || ''} date={contestData?.data || ''} />
				</div>
				<div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
						asperiores, pariatur explicabo sapiente aspernatur maxime. Quisquam
						quaerat ut ipsa ex deleniti aspernatur commodi eaque praesentium
						animi! Harum, aperiam deserunt! Quae.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
