import { IErrorResponseTypes } from "../lotery";

export enum ErrorTypeOptions {
	BAD_REQUEST = '400',
	NOT_FOUND = '404',
	SERVER_ERROR = '500',
	UNAUTHORIZED = '401',
}

interface IErrorProps {
	status: "400" | "401" | "404" | "500";
}

const errorMessage = (status: '400' | '401' | '404' | '500') => {
	return {
		'400': "Something wrong with the request",
		"401": "Unauthorized",
		"404": "There isn`t any data",
		"500": "Internal Server Error",
	}[status];
};

export function errorModule(error: IErrorProps): IErrorResponseTypes {
	return {
		error: true,
		message: errorMessage(error?.status || '400'),
	};
}
