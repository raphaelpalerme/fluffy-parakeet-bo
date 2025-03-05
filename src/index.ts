import type {Core} from '@strapi/strapi';
import {setUpOrder} from "./services/order";

export default {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register( { strapi }: { strapi: Core.Strapi }) {
		strapi.customFields.register({
			name: 'remote-select',
			type: 'json',
		})
	},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	async bootstrap({strapi}: { strapi: Core.Strapi }) {
		await setUpOrder(strapi);
	}
};
