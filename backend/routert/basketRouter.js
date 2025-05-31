import express from 'express'
import { deleteBasket, getBasket, postBasket } from '../controller/wishlistController.js'


export const basketRouter=express()

basketRouter.route('/')
.get(getBasket)
.post(postBasket)

basketRouter.route('/:id')
.delete(deleteBasket)


export default basketRouter