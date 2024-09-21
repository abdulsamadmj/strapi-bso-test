module.exports = {
  routes: [
    {
      method: "GET",
      path: "/users/me/cart",
      handler: "user.getCart",
    },
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
    {
      method: "GET",
      path: "/users/me/cart-count",
      handler: "user.getCartCount",
    },
  ],
};
