import React from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpdatingModal = ({ updatingProduct, setUpdatingProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_Key;

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,images
  } = updatingProduct;
  console.log(updatingProduct);

  const { data: categories = [],refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleUpdateProduct = (data) => {
  
        const product = {
          title: data.title,
          description: data.description,
          price: data.price,
          discountPercentage: data.discountPercentage,
          rating: data.rating,
          stock: data.stock,
          brand: data.brand,
          category: data.category,
          thumbnail,
          images
        };

        fetch(`https://dummyjson.com/products/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((result) => {
            Swal.fire({
              position: "center center",
              icon: "success",
              title: "Product updated Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
            refetch();
            setUpdatingProduct(null)
            navigate("/products");
          });
  
  };
  return (
    <>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative min-w-[900px!important]">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={()=>setUpdatingProduct(null)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handleSubmit(handleUpdateProduct)}>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-10">
              
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product Title</span>
                </label>
                <input
                  type="text"
                  placeholder={title}
                  defaultValue={title}
                  className="input input-bordered w-full"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title?.message}</p>
                )}
              </div>

              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  placeholder={brand}
                  defaultValue={brand}
                  className="input input-bordered w-full"
                  {...register("brand")}
                />
                {errors.brand && (
                  <p className="text-red-500">{errors.brand?.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
             
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder={price}
                  defaultValue={price}
                  className="input input-bordered w-full"
                  {...register("price")}
                />
              </div>

              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">DiscountPercentage</span>
                </label>
                <input
                  type="text"
                  placeholder={discountPercentage}
                  defaultValue={discountPercentage}
                  className="input input-bordered w-full"
                  {...register("discountPercentage")}
                />
                {errors.discountPercentage && (
                  <p className="text-red-500">{errors.discountPercentage?.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder={rating}
                  defaultValue={rating}
                  className="input input-bordered w-full"
                  {...register("rating")}
                />
              </div>

              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Stock</span>
                </label>
                <input
                  type="text"
                  placeholder={stock}
                  defaultValue={stock}
                  className="input input-bordered w-full"
                  {...register("stock", )}
                />
                {errors.stock && (
                  <p className="text-red-500">{errors.stock?.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product description</span>
                </label>
                <textarea
                placeholder={description}
                defaultValue={description}
                  className="textarea textarea-bordered w-full h-24"
                  {...register("description")}
                ></textarea>
                {errors.description && (
                  <p className="text-red-500">{errors.description?.message}</p>
                )}
              </div>
            </div>

            <input
              className="btn btn-primary rounded-none text-white my-5"
              value="Update"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatingModal;
