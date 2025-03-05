export default {
	async beforeCreate(event) {
    if (!event.params.data.lesson) return;
		const lessonId = event.params.data.lesson.connect?.[0]?.id;
		if (lessonId && !event.params.data.order) {
			const lastEntry = await strapi.query("api::challenge.challenge").findOne({
				where: { lesson: lessonId },
				orderBy: [{ createdAt: 'desc' }],
			});
			event.params.data.order = lastEntry?.order ? lastEntry.order + 1 : 1;
		}
	},
};