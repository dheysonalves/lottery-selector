import React, { useCallback, useEffect, useState } from "react";
import { selectLottery } from "../../../app/components/lottery/lotterySlice";
import { fetchContestsThunk, fetchLotteryContestsThunk, fetchLotteryThunk } from "../../../app/components/lottery/lotteryThunk";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

export function SelectLottery() {
	const { lotteryData, lotteryContestData } = useAppSelector(selectLottery);
	const [selectedOption, setSelectedOption] = useState("");
	const dispatch = useAppDispatch();

	const handleOptionSelected = useCallback((optionValue: string) => {
		const data = lotteryContestData?.filter((item) => item.loteriaId === Number(optionValue)).reduce(item => item)
		setSelectedOption(String(data?.concursoId));
	}, [lotteryContestData]);

	useEffect(() => {
		dispatch(fetchLotteryThunk());
		dispatch(fetchLotteryContestsThunk());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchContestsThunk(selectedOption));
	}, [dispatch, selectedOption]);

	return (
		<div>
			<select
				name="lotteries"
				id="lotteries"
				onChange={(event) => handleOptionSelected(event.target.value)}>
				{lotteryData?.length ? (
					lotteryData.map((data) => {
						return <option value={data.id} key={String(data.id)}>{data.nome}</option>;
					})
				) : (
					<option value="novalue">Dados nao encontrados</option>
				)}
			</select>
		</div>
	);
}
