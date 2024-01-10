"use client";
import { supabase } from "@/service/supabase";
import { Product } from "@/types/db";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ProductForm = Omit<Product, "id">;

const ProductForm = () => {
  const [category, setCategory] = useState<
    | {
        category_name: string;
        id: string;
      }[]
    | null
  >();
  const [formFields, setFormFields] = useState([{ name: "", value: "" }]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<ProductForm>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      price: 0,
      thumbnail: "",
      original_price: 0,
      view: 0,
      info_img: ""
    }
  });
  let array: string[] = [];

  const handleAddFields = () => {
    const values = [...formFields, { name: "", value: "" }];
    setFormFields(values);
  };

  const handleRemoveFields = (index: number) => {
    if (formFields.length === 1) {
      alert("삭제하실 수 없습니다!");
      return;
    }
    const values = [...formFields].filter((item, i) => {
      return i !== index;
    });
    setFormFields(values);
  };

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...formFields];

    if (e.target.name === "name") {
      values[index].name = e.target.value;
    } else {
      values[index].value = e.target.value;
    }
    setFormFields(values);
  };

  formFields.forEach((data) => {
    array.push(`${data.name}&${data.value}`);
  });

  const handleProductFormSubmit = (data: ProductForm) => {
    alert(JSON.stringify(data));
    createData(data);
  };

  const createData = async (data: ProductForm) => {
    fetch(`${window.location.origin}/api/product`, { method: "POST", body: JSON.stringify(data) });
  };

  const fetchCategoryData = async () => {
    try {
      const { data } = await supabase.from("category").select();
      setCategory(data);
      console.log(data);
    } catch (error) {
      console.log("category fetching error", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <form
      className="w-[300px] flex flex-col justify-center align-center"
      onSubmit={handleSubmit(handleProductFormSubmit)}
    >
      <label htmlFor="name">상품명</label>

      <input
        className=" border-black border-solid border"
        id="name"
        type="text"
        {...register("name", {
          required: "상품명을 입력해주세요."
        })}
      />
      <p>{errors?.name ? <p>{errors.name.message}</p> : null}</p>
      <label htmlFor="price">렌트 가격</label>
      <input
        className=" border-black border-solid border"
        id="price"
        type="text"
        {...register("price", {
          required: "렌트 가격을 설정해주세요."
        })}
      />
      <p>{errors?.price ? <p>{errors.price.message}</p> : null}</p>
      <label htmlFor="original_price">원가</label>
      <input
        className=" border-black border-solid border"
        id="original_price"
        type="text"
        {...register("original_price", {
          required: "원가를 설정해주세요."
        })}
      />
      <p>{errors?.original_price ? <p>{errors.original_price.message}</p> : null}</p>
      <label htmlFor="thumbnail">상품 사진</label>
      <input
        className=" border-black border-solid border"
        id="thumbnail"
        type="file"
        {...register("thumbnail", {
          required: "상품 대표 사진을 등록해주세요."
        })}
      />
      <p>{errors?.thumbnail ? <p>{errors.thumbnail.message}</p> : null}</p>
      <label htmlFor="info_img">상품 상세 설명 이미지</label>
      <input className=" border-black border-solid border" id="info_img" type="file" {...register("info_img")} />
      <select
        {...register("category_id", {
          required: "카테고리를 선택해주세요."
        })}
      >
        <option>카테고리 선택</option>
        {category?.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {data.category_name}
            </option>
          );
        })}
      </select>
      <p>{errors?.category_id ? <p>{errors.category_id.message}</p> : null}</p>
      <>
        {formFields.map((field, index) => (
          <div key={index} style={{ marginBottom: 5 }}>
            <input
              type="text"
              placeholder="Field name"
              name="name"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
              style={{ marginRight: 10 }}
            />

            <input
              type="text"
              placeholder="Field value"
              name="value"
              value={field.value}
              onChange={(e) => handleInputChange(index, e)}
              style={{ marginRight: 10 }}
            />

            <button type="button" onClick={() => handleRemoveFields(index)}>
              삭제
            </button>
          </div>
        ))}

        <button type="button" onClick={() => handleAddFields()} style={{ marginTop: 10, marginRight: 10 }}>
          추가
        </button>
      </>
      <input {...register("info")} />
      <button type="submit" onClick={() => setValue("info", array)}>
        확인
      </button>
    </form>
  );
};

export default ProductForm;
