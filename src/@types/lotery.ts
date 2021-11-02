export interface ILotteryResponseTypes {
	id: number;
	nome: string;
}

export interface ILotteryContestResponseTypes {
	loteriaId: number;
	concursoId: string;
}

export interface IContestResponseTypes {
	id: string;
	loteria: number;
	numeros: string[];
	data: string;
}

export interface IErrorResponseTypes {
	error: boolean;
	message: string | undefined;
}
