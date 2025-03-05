/**
 * A set of functions called "actions" for `proxy`
 */
import axios from "axios";

export default {
	executeProxy: async (ctx, next) => {
		try {
			const {url, token, method, data} = ctx.request.body;
			const request = await axios.request({
				url,
				method,
				headers: {
					Authorization: `Bearer ${token}`,
				},
				data,
			}).catch(
				(err) => {
					console.log(err);
					return null;
				}
			);
			if (request) {
				ctx.body = request.data;
			} else {
				ctx.body = null;
			}
		} catch (err) {
			ctx.body = err;
		}
	}
};
