import React, { useEffect, useState } from 'react';
import styles from './AdminCard.module.scss';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductThunk, getProductThunk, postProductThunk } from '../../../redux/reducers/productSlice';
import { deleteWhislistThunk } from '../../../redux/reducers/whislistSlice';


const SignupForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
        },
        onSubmit: (values) => {
            dispatch(postProductThunk(values));
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <label htmlFor="image">Image</label>
            <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
            />
            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.price}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

const AdminCard = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); 
    const [sortedProducts, setSortedProducts] = useState([]);

    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getProductThunk());
    }, [dispatch]);

    useEffect(() => {
        if (products) {
            let filteredProducts = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

      
            filteredProducts = filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price);
                const priceB = parseFloat(b.price);
                if (sortOrder === 'asc') {
                    return priceA - priceB;
                } else {
                    return priceB - priceA;
                }
            });

            setSortedProducts(filteredProducts);
        }
    }, [searchQuery, products, sortOrder]);

    const deleteAdmin = (id) => {
        dispatch(deleteWhislistThunk(id));
        dispatch(deleteProductThunk(id));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className={styles.adminCard}>
            <SignupForm />
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <button onClick={toggleSortOrder} className={styles.sortButton}>
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts &&
                        sortedProducts.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <img src={item.image} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => deleteAdmin(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminCard;