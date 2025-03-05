export default {
  routes: [
    {
     method: 'POST',
     path: '/proxy',
     handler: 'proxy.executeProxy',
     config: {
       policies: [],
       auth: false,
     },
    },
  ],
};
