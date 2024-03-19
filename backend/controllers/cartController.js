import Cart from '../models/cart.model.js'

export const addToCart = (req, res) => {
    const userId = req.user.id;
    const cartItems = req.body.cartItems;
    if (req.user.isAdmin == true) {
      return res.status(400).send("Admins cannot add to cart") 
    } else {
      Cart.findOne({ userId })
      .then((cart) => {
        if (!cart) {
          const totalPrice = calculateTotalPrice(cartItems);
          const newCart = new Cart({
            userId: req.user.id,
            cartItems: cartItems,
            totalPrice: totalPrice,
          });
          return newCart
            .save()
            .then((savedCart) => res.status(201).send(savedCart))
            .catch((error) => {
              console.error("Error saving new cart:", error);
              return res.status(500).send({ error: "Internal server error" });
            });
        } else {         
           
          cartItems.forEach((newCartItem) => {
          
            const existingCartItem = cart.cartItems.find(
              (item) =>
                item.productId.toString() === newCartItem.productId.toString()
            );
            if (existingCartItem) {
              // If productId exists, update quantity and subtotal
              existingCartItem.quantity = newCartItem.quantity;
              existingCartItem.subtotal = newCartItem.subtotal;
            } else {
              cart.cartItems.push(newCartItem);
            }
          });
  
          // Recalculate total price
          cart.totalPrice = calculateTotalPrice(cart.cartItems);
  
          return cart
            .save()
            .then((savedCart) => res.status(200).send(savedCart))
            .catch((error) => {
              console.error("Error saving updated cart:", error);
              return res.status(500).send({ error: "Internal server error" });
            });
        }
      })
      .catch((error) => {
        console.error("Error finding cart:", error);
        return res.status(500).send({ error: "Internal server error" });
      });
  };
    }

    export const updateCart = (req, res) => {
        const userId = req.user.id;
        const cartItems = req.body.cartItems;
        if (req.user.isAdmin == true) {
          return res.status(400).send("Admins cannot update quantity in the cart") 
        } else {
          Cart.findOne({ userId })
          .then((cart) => {
            if (!cart) {
              res.status(404).send({ message: "Cart is empty" });
            } else {
              cartItems.forEach((updateCartItem) => {
                const existingCartItem = cart.cartItems.find(
                  (item) =>
                    item.productId.toString() === updateCartItem.productId.toString()
                );
                if (existingCartItem) {
                  existingCartItem.quantity = updateCartItem.quantity;
                  existingCartItem.subtotal = updateCartItem.subtotal;
                }
              });
              cart.totalPrice = calculateTotalPrice(cart.cartItems);
      
              return cart
                .save()
                .then((savedCart) => res.status(200).send(savedCart))
                .catch((error) => {
                  console.error("Error saving updated cart:", error);
                  return res.status(500).send({ error: "Internal server error" });
                });
            }
          })
          .catch((error) => {
            console.error("Error finding cart:", error);
            return res.status(500).send({ error: "Internal server error" });
          });
      };
        }

     export const getCart = (req, res) => {
            const userId = req.user.id;
            if (req.user.isAdmin == true) {
              return res.status(400).send("Admins cannot get cart") 
            } else { 
              Cart.findOne({ userId })
              .then((cart) => {
                if (!cart) {
                  res.status(404).send({ message: "Cart is empty" });
                } else {
                  res.status(200).send(cart);
                }
              })
              .catch((error) => {
                console.error("Error finding cart:", error);
                return res.status(500).send({ error: "Internal server error" });
              });
          };
            }
     export const removeProduct = (req, res) => {
        const userId = req.user.id;
        const removeProductId = req.params.productId;
        if (req.user.isAdmin == true) {
          return res.status(400).send("Admins cannot remove product from cart") 
        } else {  
          Cart.findOne({ userId })
          .then((cart) => {
            if (!cart) {
              return res.status(404).send({ message: "Cart is empty" });
            } else {              
              const indexToRemove = cart.cartItems.findIndex(
                (item) => item.productId.toString() === removeProductId.toString()
              );
      
              if (indexToRemove === -1) {
                return res.status(404).send({ message: "Product not found in cart" });
              }
      
              // Remove the cart item from the cartItems array
              cart.cartItems.splice(indexToRemove, 1);
      
              // Recalculate the total price of the cart
              cart.totalPrice = calculateTotalPrice(cart.cartItems);
      
              // Save the updated cart back to the database
              return cart
                .save()
                .then((savedCart) =>
                  res
                    .status(200)
                    .send({ message: "Product removed from cart", savedCart: savedCart })
                )
                .catch((error) => {
                  console.error("Error saving updated cart:", error);
                  return res.status(500).send({ error: "Internal server error" });
                });
            }
          })
          .catch((error) => {
            console.error("Error finding cart:", error);
            return res.status(500).send({ error: "Internal server error" });
          });
      };      
          
     }
     export const clearCart = (req, res) => {
        const userId = req.user.id;
        if (req.user.isAdmin == true) {
          return res.status(400).send("Admins cannot clear items from cart") 
        } else {  
          Cart.findOne({ userId })
          .then((cart) => {
            if (!cart) {
              return res.status(404).send({ message: "Cart is empty" });
            } else {
                cart.cartItems = [];
                cart.totalPrice = 0;
                return cart.save()
                .then((updatedCart) => res.status(200).send({ message: "Cart cleared successfully", updatedCart: updatedCart}))
                .catch((error) => {
                  console.error("Error saving updated cart:", error);
                  return res.status(500).send({ error: "Internal server error" });
                });
            }
          })
          .catch((error) => {
            console.error("Error finding cart:", error);
            return res.status(500).send({ error: "Internal server error" });
          });
      };
        }
        function calculateTotalPrice(cartItems) {
            return cartItems.reduce((total, item) => total + item.subtotal, 0);
          }
          