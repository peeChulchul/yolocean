import Image from "next/image";
import React from "react";
import Controller from "./ControlForm";
import Info from "./Info";
import PageBreadCrumb from "@/components/layout/PageBreadCrumb";
import { getProduct, updateProduct } from "@/service/table";
import View from "./View";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { productId: string };
  searchParams: { [key: string]: any } | undefined;
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const productId = params.productId;

  // fetch data
  const product = await getProduct({ productId });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `욜루오션 ${product.category.category_name}/${product.name} `,
    description: `${product.name}`
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

const ProductDetailPage = async ({ params: { productId }, searchParams }: Props) => {
  const product = await getProduct({ productId });
  const {
    name,
    category_id,
    category: { category_name },
    thumbnail,
    price,
    id,
    info_img,
    info,
    original_price,
    view,
    percentage_off
  } = product;

  return (
    <section className="relative scroll-smooth">
      <View product={product} />
      <PageBreadCrumb
        linkList={[
          { name: "홈", url: "/" },
          { name: category_name, url: `/category/${category_id}` },
          { name: name, url: `/category/${category_id}/${id}` }
        ]}
      />
      <div className="flex gap-[24px] flex-wrap  ">
        <div className="relative max-w-[500px] w-full h-[500px] min-w-[300px] mx-auto mobile:h-[300px]   ">
          <Image
            priority
            alt={`${name}_image`}
            style={{ objectFit: "fill" }}
            fill
            sizes="(max-width: 1200px) 500px, 335px"
            src={thumbnail}
          />
        </div>
        <Controller
          percentage_off={percentage_off}
          product_id={id}
          price={price}
          original_price={original_price}
          category_name={category_name}
          name={name}
        />
      </div>
      <Info productId={id} info_img={info_img} info={info} searchParams={searchParams?.article || "상품설명"} />
    </section>
  );
};

export default ProductDetailPage;
