module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      // Listens for changes in the `product` content type
      contentTypes: ["api::product.product"],
    },
  },
});
