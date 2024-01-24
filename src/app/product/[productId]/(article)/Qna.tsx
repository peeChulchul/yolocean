"use client";
import Pagenation from "@/components/Pagenation";
import ReviewList from "@/components/review/ReviewList";
import { getAllProductQna } from "@/service/table";
import { useAuthStore } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import React, { useEffect, useState } from "react";

interface Props {
  productId: string;
}
const Qna = ({ productId }: Props) => {
  const [page, setPage] = useState(1);

  const { auth } = useAuthStore();
  const {
    data: qna,
    isLoading,
    refetch
  } = useQuery({
    queryFn: async () => await getAllProductQna({ page, productId }),
    queryKey: ["qna", productId]
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <div>
      <div className="flex justify-end items-center  mb-[25px]">
        <Link href={`/qna/product/${productId}`}>
          <button className="bg-point text-white text-[14px] rounded-lg  px-[18px] py-[10px]">{`문의 작성`}</button>
        </Link>
      </div>
      {qna && !isLoading && (
        <ReviewList productId={productId} currentUserId={auth} reviewList={qna.qna} listType="qna" />
      )}
      {qna && (
        <Pagenation articleName={"제품문의"} setPage={setPage} maxPage={qna.maxPage} currentPage={page} limit={5} />
      )}
    </div>
  );
};

export default Qna;
