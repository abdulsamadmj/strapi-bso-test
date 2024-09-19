module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      // Listens for changes in the `product` content type
      contentTypes: ["api::product.product"], // Adjust this to your content type
      // Additional configurations (CORS, etc.)
      ios: {
        cors: {
          origin: "*", // Adjust the origin as per your frontend URL in production
          methods: ["GET", "POST"],
        },
      },
    },
  },
});
