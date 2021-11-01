import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContests, fetchLottery, fetchLotteryContests } from "./lotteryService";

export const fetchLotteryThunk = createAsyncThunk(
	"lottery/fetchLottery",
	async () => {
		const response = await fetchLottery();
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);

export const fetchLotteryContestsThunk = createAsyncThunk(
	"lottery/fetchLotteryContests",
	async () => {
		const response = await fetchLotteryContests();
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);

export const fetchContestsThunk = createAsyncThunk(
	"lottery/fetchContests",
	async (id: string) => {
		const response = await fetchContests(id);
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);
