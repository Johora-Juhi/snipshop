import { useQuery } from "@tanstack/react-query";
// import { format } from 'date-fns';
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import useTitle from '../../../hooks/useTitle';

const AddProduct = () => {
  // useTitle('Add Product');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb_Key;

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.thumbnail[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
        }
        const product = {
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          discountPercentage: data.discountPercentage,
          rating: data.rating,
          stock: data.stock,
          brand: data.brand,
          category: data.category,
          thumbnail: imgData.data.url,
          //   "images": ["...", "...", "..."]
        };

        fetch("https://assignment-twelve-server-six.vercel.app/categories", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((result) => {
            Swal.fire({
              position: "center center",
              icon: "success",
              title: "Product added Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/products");
          });
      });
  };
  return (
    <div className="flex justify-center items-center bg-slate-100">
      <div className="w-full px-7 py-10 mx-5 ">
        <div className="text-3xl text-center">Add A Product</div>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-10">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Product ID</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("id", {
                  required: "Product id is required",
                })}
              />
              {errors.id && (
                <p className="text-red-500">{errors.id?.message}</p>
              )}
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("productTitle", {
                  required: "Product title is required",
                })}
              />
              {errors.productTitle && (
                <p className="text-red-500">{errors.productTitle?.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Product description</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-12"
                {...register("description", {
                  required: "Please Enter your product description",
                })}
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description?.message}</p>
              )}
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("price", {
                  required: true,
                })}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">DiscountPercentage</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("discountPercentage", {
                  required: "Product discountPercentage is required",
                })}
              />
              {errors.discountPercentage && (
                <p className="text-red-500">{errors.location?.message}</p>
              )}
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("rating", {
                  required: true,
                })}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("stock", {
                  required: "Product stock is required",
                })}
              />
              {errors.stock && (
                <p className="text-red-500">{errors.resaleSale?.message}</p>
              )}
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("brand", {
                  required: "Product brand is required",
                })}
              />
              {errors.brand && (
                <p className="text-red-500">{errors.resaleSale?.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="form-control  w-full mb-2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category", {
                  required: "category is required",
                })}
                className="select select-bordered w-full text-black"
              >
                {categories.map((category) => (
                  <option
                    className="text-black"
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <p className="text-red-500">{errors.categoryId?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("thumbnail", { required: true })}
              />
            </div>
          </div>

          <input
            className="btn btn-primary rounded-none text-white my-5"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
