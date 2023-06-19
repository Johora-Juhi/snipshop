import React, { useState } from 'react';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../Shared/Loading/Loading';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import UpdatingModal from './UpdatingModal';
import useTitle from '../../hooks/useTitle';

const Products = () => {
    useTitle('Products');

    const [deletingProduct, setDeletingProduct] = useState(null);
    const [updatingProduct, setUpdatingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }
    const handleDetetingProduct = product => {
        console.log(product);
        fetch(`https://dummyjson.com/products/${product.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Product Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    const url = `https://dummyjson.com/products`;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data.products
        }
    })
    console.log(products);

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div className='bg-blue-50 p-8'>
            <div>
                <h1 className='text-xl font-bold'>Manage Products: {products?.length}</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Title</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product.id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.title}</td>
                                    <td>
                                        <label onClick={() => setUpdatingProduct(product)} htmlFor="update-modal" className="btn btn-primary btn-outline text-white btn-sm">Update</label>
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingProduct.title}. It can not be done`}
                    successAction={handleDetetingProduct}
                    modalData={deletingProduct}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
             {
                updatingProduct &&
                <UpdatingModal
                    updatingProduct={updatingProduct}
                    setUpdatingProduct={setUpdatingProduct}
                ></UpdatingModal>
            }
        </div >
    );
};

export default Products;