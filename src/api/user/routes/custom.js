module.exports = {
  routes: [
    {
      method: "POST",
      path: "/users/me/cart",
      handler: "user.addToCart",
      config: {
        auth: {
          // Instead of `auth: true`
          // scope: ["authenticated"], // This ensures only authenticated users can access
        },
      },
    },
  ],
};
