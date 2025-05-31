import wishlistModel from "../model/whislistModel.js";

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await wishlistModel.find();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const postWishlist = async (req, res) => {
  try {
    const { image, title, price } = req.body;
    const newWishlist = await wishlistModel.create({ image, title, price });
    res.status(201).json(newWishlist);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    await wishlistModel.findByIdAndDelete(id);
    res.json({ message: "Item deleted from wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
