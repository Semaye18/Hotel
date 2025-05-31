import express from 'express';
import { deleteWishlist, getWishlist, postWishlist } from '../controller/whishlistController.js';

const whislistRouter = express.Router();

whislistRouter.route('/')
  .get(getWishlist)
  .post(postWishlist);

whislistRouter.route('/:id')
  .delete(deleteWishlist);

export default whislistRouter;
