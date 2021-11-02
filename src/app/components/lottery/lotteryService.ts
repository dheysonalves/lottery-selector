import {
	IContestResponseTypes,
	ILotteryContestResponseTypes,
	ILotteryResponseTypes,
} from "../../../@types/lotery";
import { api } from "../../../@types/modules/api";

export const fetchLottery = async (): Promise<ILotteryResponseTypes[] | null> => {
	try {
		const data: ILotteryResponseTypes[] = await api.get(
			"https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
		);

		return data;
	} catch (error) {
		return null;
	}
};

export const fetchLotteryContests = async (): Promise<
	ILotteryContestResponseTypes[] | null
> => {
	try {
		const data: ILotteryContestResponseTypes[] = await api.get(
			"https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
		);

		return data;
	} catch (error) {
		return null;
	}
};

export const fetchContests = async (id: string): Promise<
	IContestResponseTypes | null
> => {
	try {
		const data: IContestResponseTypes = await api.get(
			`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`
		);

		return data;
	} catch (error) {
		return null;
	}
};

