import {
	IContestResponseTypes,
	IErrorResponseTypes,
	ILotteryContestResponseTypes,
	ILotteryResponseTypes,
} from "../../../@types/lotery";
import { api } from "../../../@types/modules/api";
import { errorModule } from "../../../@types/modules/error";

export const fetchLottery = async (): Promise<
	ILotteryResponseTypes[] | IErrorResponseTypes
> => {
	try {
		const data: ILotteryResponseTypes[] = await api.get(
			"https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
		);

		return data;
	} catch (error) {
		return errorModule(error);
	}
};

export const fetchLotteryContests = async (): Promise<
	ILotteryContestResponseTypes[] | IErrorResponseTypes
> => {
	try {
		const data: ILotteryContestResponseTypes[] = await api.get(
			"https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
		);

		return data;
	} catch (error) {
		return errorModule(error);
	}
};

export const fetchContests = async (id: string): Promise<
	IContestResponseTypes | IErrorResponseTypes
> => {
	try {
		const data: IContestResponseTypes = await api.get(
			`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`
		);

		return data;
	} catch (error) {
		return errorModule(error);
	}
};

