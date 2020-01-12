import { idb } from "../../db";
import { g } from "../../util";
import create from "./create";
import { Conditions } from "../../../common/types";

const getOrCreate = async (): Promise<{
	finalized: boolean;
	pid?: number;
}> => {
	let allStars = await idb.cache.allStars.get(g.season);

	if (!allStars) {
		allStars = await create({});
		await idb.cache.allStars.put(allStars);
	}

	return allStars;
};

export default getOrCreate;