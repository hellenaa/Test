"use strict";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "content",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		addAbout: {
			params: {
				about_text_arm: { type: "string", min: 10 },
				about_text_rus: { type: "string", min: 10 },
				about_text_eng: { type: "string", min: 10 },
				status: { type: "string", min: 4 },
			},
			async handler(ctx) {
				const {
					about_text_arm,
					about_text_rus,
					about_text_eng,
					status
				} = ctx.params;
				const about = await prisma.about.create({
					data: {
						about_text_arm,
						about_text_rus,
						about_text_eng,
						status
					}
				});
				return about;
			}
		},
		async getAbouts() {
			const abouts = await prisma.about.findMany();
			return abouts;
		}
	},

	/**
	 * Events
	 */
	events: {

	}

	/**
	 * Methods
	 */
	// methods: {
	//
	// },

	/**
	 * Service created lifecycle event handler
	 */
	// created() {
	//
	// },

	/**
	 * Service started lifecycle event handler
	 */
	// async started() {
	//
	// },

	/**
	 * Service stopped lifecycle event handler
	 */
	// async stopped() {
	//
	// }
};
