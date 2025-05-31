import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './WhishlistCard.module.scss';
import { FaTrash } from 'react-icons/fa';
import { deleteWhislistThunk, getWhislistThunk } from '../../../redux/reducers/whislistSlice';



const WishlistCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWhislistThunk());
  }, [dispatch]);

  const whislist = useSelector(state => state.whislist.whislist) || [];

  const deleteFromWishlist = (id) => {
    dispatch(deleteWhislistThunk(id));
  };

  return (
    <div className={styles.wishlist}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {whislist.map(item => (
            <div className={styles.card} key={item._id}>
              <div className={styles.imageWrapper}>
                <img src={item.image || null} alt={item.title} />
                <FaTrash
                  className={styles.trashIcon}
                  onClick={() => deleteFromWishlist(item._id)}
                />
              </div>
              <div className={styles.text}>
                <p>{item.title}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
