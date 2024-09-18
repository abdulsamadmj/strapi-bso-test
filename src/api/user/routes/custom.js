module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/users/me/cart",
      handler: "user.addToCart",
    },
    {
      method: "DELETE",
      path: "/users/me/cart",
      handler: "user.removeFromCart",
    },
  ],
};
