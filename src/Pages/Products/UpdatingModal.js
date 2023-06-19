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
    category,
    thumbnail,
  } = updatingProduct;
  console.log(updatingProduct);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleUpdateProduct = (data) => {
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
            navigate("/products");
          });
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
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handleSubmit(handleUpdateProduct)}>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-10">
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product ID</span>
                </label>
                <input
                  type="text"
                  placeholder={id}
                  defaultValue={id}
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
                  placeholder={title}
                  defaultValue={title}
                  className="input input-bordered w-full"
                  {...register("title", {
                    required: "Product title is required",
                  })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title?.message}</p>
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
                  {...register("price", {
                    required: true,
                  })}
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
                  {...register("discountPercentage", {
                    required: "Product discountPercentage is required",
                  })}
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
                  {...register("rating", {
                    required: true,
                  })}
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
                  {...register("stock", {
                    required: "Product stock is required",
                  })}
                />
                {errors.stock && (
                  <p className="text-red-500">{errors.stock?.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
             
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  placeholder={brand}
                  defaultValue={brand}
                  className="input input-bordered w-full"
                  {...register("brand", {
                    required: "Product brand is required",
                  })}
                />
                {errors.brand && (
                  <p className="text-red-500">{errors.brand?.message}</p>
                )}
              </div>
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
                    //   value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500">{errors.category?.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              
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
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product description</span>
                </label>
                <textarea
                placeholder={description}
                defaultValue={description}
                  className="textarea textarea-bordered w-full h-24"
                  {...register("description", {
                    required: "Please Enter your product description",
                  })}
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
