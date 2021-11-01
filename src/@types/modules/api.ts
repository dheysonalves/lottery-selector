import { request } from "./request";

export const api = {
	get: <TResponse>(url: string) =>
		request<TResponse>(url, {
			headers: {
				"content-type": "application/json;charset=UTF-8",
			},
		}),

	// Using `extends` to set a type constraint:
	post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
		request<TResponse>(url, {
			method: "POST",
			headers: {
				"content-type": "application/json;charset=UTF-8",
			},
			body,
		}),
};
