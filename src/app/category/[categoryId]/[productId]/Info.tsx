"use client";
import Tab from "@/components/Tab";
import { useOfficeStore } from "@/store/officeStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useStore } from "zustand";
import StockTable from "./StockTable";
import CommonGuide from "./CommonGuide";
import ProductReviewList from "@/components/review/ProductReviewList";
import { useReview } from "@/hooks";
import ReviewList from "@/components/review/ReviewList";

interface Props {
  info_img: string;
  info: string[];
  id: string;
}

const ProductTab = ["상품설명", "상세정보", "후기", "제품문의"];

const Info = ({ info_img, info, id }: Props) => {
  const [activeTab, setActiveTab] = useState("상품설명");
  const router = useRouter();

  const observerRef = useRef<any>([]);
  const { reviewData } = useReview({ productId: id });

  const scrollObsuerver = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveTab(entries[0].target.id);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      ),
    []
  );

  useEffect(() => {
    if (!observerRef.current) return;
    observerRef.current.forEach((el: any) => {
      scrollObsuerver.observe(el);
    });

    return () => {
      // observerRef.current = null;
    };
  }, [observerRef, scrollObsuerver]);

  return (
    <div className="mt-[16px]">
      <Tab
        tabs={ProductTab}
        activeTab={activeTab}
        handleTabClick={(tab: string) => {
          setActiveTab(tab);
          router.push(`#${tab}`);
        }}
      />

      <article
        ref={(el) => (observerRef.current[0] = el)}
        id="상품설명"
        className="mt-[40px] w-[795px] mx-auto h-auto w-full"
      >
        <Image
          src={info_img}
          alt="product_info"
          sizes="(max-width: 1200px) 795px"
          width={0}
          height={0}
          className="w-[795px] mx-auto h-auto w-full"
        />
      </article>

      <article ref={(el) => (observerRef.current[1] = el)} className="w-[795px] mx-auto h-auto w-full" id="상세정보">
        <CommonGuide />
        <table className="w-full text-sm text-left border text-gray-500 ">
          <tbody>
            {info.map((item) => (
              <tr key={item.split("&")[0]} className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.split("&")[0]}
                </th>
                <td className="px-6 py-4 text-center border-l">{item.split("&")[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article ref={(el) => (observerRef.current[2] = el)} className="w-[795px] mx-auto h-auto" id="후기">
        {reviewData && <ReviewList reviewList={reviewData} listType="review" />}
      </article>
    </div>
  );
};

export default Info;
