import React, { useCallback, useEffect, useState } from "react";
import {
	selectLottery,
	setSelectedLottery,
} from "../../../app/components/lottery/lotterySlice";
import {
	fetchContestsThunk,
	fetchLotteryContestsThunk,
	fetchLotteryThunk,
} from "../../../app/components/lottery/lotteryThunk";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import styles from "./SelectLottery.module.css";

export function SelectLottery() {
	const { lotteryData, lotteryContestData } = useAppSelector(selectLottery);
	const [contestId, setContestId] = useState("");
	const dispatch = useAppDispatch();

	const dispatchSelectedOption = useCallback(
		(selectedValue: string) => {
			const selectedLottery = lotteryData?.find(
				(item) => item.id === Number(selectedValue)
			);
			dispatch(setSelectedLottery(selectedLottery));
		},
		[dispatch, lotteryData]
	);

	const handleOptionSelected = useCallback(
		(selectedValue: string) => {
			const contestSelected = lotteryContestData
				?.filter((item) => item.loteriaId === Number(selectedValue))
				.reduce((item) => item);
			setContestId(String(contestSelected?.concursoId));
		},
		[lotteryContestData]
	);

	useEffect(() => {
		dispatch(fetchLotteryThunk());
		dispatch(fetchLotteryContestsThunk());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchContestsThunk(contestId));
	}, [dispatch, contestId]);

	return (
		<div>
			<select
				className={styles.select}
				name="lotteries"
				id="lotteries"
				onChange={(event) => {
					dispatchSelectedOption(event.target.value);
					handleOptionSelected(event.target.value);
				}}>
				{lotteryData?.length ? (
					lotteryData.map((data) => {
						return (
							<option value={data.id} key={String(data.id)}>
								{data.nome}
							</option>
						);
					})
				) : (
					<option value="novalue">Dados nao encontrados</option>
				)}
			</select>
		</div>
	);
}
