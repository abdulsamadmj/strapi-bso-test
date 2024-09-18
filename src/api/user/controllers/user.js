module.exports = {
  async addToCart(ctx) {
    try {
      const { pID } = ctx.request.body;

      // 1. Find the product by pID
      const product = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: { pID },
        }
      );

      if (!product || product.length === 0) {
        return ctx.badRequest("Product not found");
      }

      // 2. Get the current user and populate the cart component
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        ctx.state.user.id,
        {
          populate: ["cart.products"], // Ensure products inside cart are populated
        }
      );

      if (!user) {
        return ctx.badRequest("User not found");
      }

      // 3. Check if the user has a cart, if not, initialize it
      let updatedCartProducts = [];
      if (user.cart && user.cart.products) {
        // If cart exists, copy existing products
        updatedCartProducts = user.cart.products.map((item) => item.id);
      }

      // 4. Add the new product ID to the cart
      updatedCartProducts.push(product[0].id); // Add new product's ID

      // 5. Update the user's cart
      await strapi.entityService.update(
        "plugin::users-permissions.user",
        user.id,
        {
          data: {
            cart: {
              products: updatedCartProducts, // Updated array of product IDs
            },
          },
        }
      );

      // 6. Send success response
      ctx.send({ message: "Product added to cart successfully" });
    } catch (err) {
      console.error("Error adding product to cart:", err);
      ctx.badRequest("Unable to add product to cart", { error: err });
    }
  },
};
