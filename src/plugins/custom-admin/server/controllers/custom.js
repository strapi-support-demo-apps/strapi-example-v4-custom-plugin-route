"use strict";

module.exports = ({ strapi }) => ({
  getSecret(ctx) {
    return {
      data: {
        mySecret: strapi.config.get("plugin.custom-admin").mySecret,
      },
    };
  },
});
