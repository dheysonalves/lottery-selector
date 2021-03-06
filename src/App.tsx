import React from "react";
import styles from "./App.module.css";
import { selectLottery } from "./app/components/lottery/lotterySlice";
import { useAppSelector } from "./app/hooks";
import { SelectLottery } from "./components/behavior/selectLottery/SelectLottery";
import { ContestShow } from "./components/presentation";

import Trevo from "./assets/svg/trevo.svg";
import GroupedDots from "./components/presentation/dots/groupedDots/GroupedDots";

function App() {
	const { contestData, selectedLottery } = useAppSelector(selectLottery);

	return (
		<div className={styles.App}>
			<div className={styles.wrapper}>
				<div className={styles.left_screen}>
					<SelectLottery />
					<div className={styles.row}>
						<img
							src={Trevo}
							alt="duas folhas na diagonal, como um trevo de 4 folhas"
							className={styles.image}
						/>
						<p className={styles.header}>MEGA-SENA</p>
					</div>
					<ContestShow
						contestId={contestData?.id || ""}
						date={contestData?.data || ""}
					/>
				</div>
				<div className={styles.right_screen}>
					<div />
					{!selectedLottery ? (
						<p className={styles.footer_text}>
							...
						</p>
					) : (
						<GroupedDots numbers={contestData?.numeros || []} />
					)}

					<p className={styles.footer_text}>
						Este sorteio é meramente ilustrativo e não possui nenhuma ligação
						com a CAIXA.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
