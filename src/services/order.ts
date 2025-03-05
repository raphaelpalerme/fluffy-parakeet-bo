import { Core, Schema } from "@strapi/strapi";

export const setUpOrder = async (strapi: Core.Strapi) => {
  strapi.db.lifecycles.subscribe({
    beforeCreate: async (params) => {
      const isApiModel = params.model.uid.startsWith('api::');
      if (!isApiModel) {
        return;
      }
      const lastEntry = await strapi.query(params.model.uid as Schema.Schema["uid"]).findOne({
        orderBy: { appId: 'desc', createdAt: 'desc' },
      });
      if (params.model.columnToAttribute.order && !params.params.data.order) {
        params.params.data.order = lastEntry?.order ? lastEntry.order + 1 : 1;
      }
      if (params.model.columnToAttribute.app_id && !params.params.data.appId) {
        params.params.data.appId = lastEntry?.appId ? Number(lastEntry.appId) + 1 : 1;
      }
    },
    afterFindMany: async (params) => {
      const { result } = params;
      if (result.length > 0) {
        if (result[0].order !== undefined) {
          result.map((element) => {
            if (element.lessons?.length > 0) {
              element.lessons.sort((a, b) => a.order - b.order);
            }
            if (element.units?.length > 0) {
              element.units.sort((a, b) => a.order - b.order);
            }
            if (element.challenges?.length > 0) {
              element.challenges.sort((a, b) => a.order - b.order);
            }
            return element;
          }).sort((a, b) => a.order - b.order);
        }
      }
    },
  })
}
