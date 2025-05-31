import React, { useEffect } from 'react'
import styles from './ProductCard.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { getProductThunk } from '../../../redux/reducers/productSlice'
import { getWhislistThunk, postWhislistThunk } from '../../../redux/reducers/whislistSlice'



const ProductCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProductThunk())
  }, [dispatch])

  const products = useSelector(state => state.products.products) || []

  const addToWishlist = (item) => {
    dispatch(postWhislistThunk(item)).then(() => {
      dispatch(getWhislistThunk())  
    })
  }

  const goDetail = (product) => {
    navigate('/detail', { state: { item: product } })
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {products.map(item => (
            <div className={styles.card} key={item.id}>
              <div className={styles.likeIcon} onClick={() => addToWishlist(item)}>
                <FaHeart />
              </div>
              <div className={styles.text}>
                <img src={item.image} alt={item.title} onClick={() => goDetail(item)} />
                <p>{item.title}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
