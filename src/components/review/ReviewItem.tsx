import Image from "next/image";
import React from "react";
import { ExtendReview } from "@/types/db";
import Avatar from "../Avatar";
import ReviewBtnGroup from "./ReviewBtnGroup";
import { convertTime } from "@/utils/convertTime";

interface Props {
  review: ExtendReview;
  currentUserId?: string;
  listType: "review" | "qna";
  productId?: string;
}

enum EnumListType {
  review = "리뷰",
  qna = "문의"
}

const ReviewItem = ({ review, currentUserId, listType, productId }: Props) => {
  const { shortDateFormat } = convertTime(review.created_at);
  const isCurrentUser = currentUserId === review.user_id;
  const reviewImageList = review.url;
  const reviewStore = listType === "review" ? [review.store.region.region, review.store.name].join(" - ") : "";
  const reviewUserName = isCurrentUser
    ? review.userinfo.username
    : review.userinfo.username[0] + "*".repeat(review.userinfo.username.length - 1);

  return (
    <div className="flex flex-col gap-[30px] border-b-[1px] border-line py-[40px]">
      <div className="flex flex-row  gap-[20px] items-center justify-between ">
        <div className="flex items-center gap-[24px]">
          <Avatar size="sm" src={review.userinfo.avatar_url} />
          <p className="font-medium text-tc-light">{reviewUserName}</p>
        </div>
        {listType === "review" && <p className="font-medium text-tc-light ml-auto">{reviewStore}</p>}
        <p className="font-medium text-tc-light">{shortDateFormat}</p>
      </div>

      <div>
        {listType === "qna" && <h1 className="font-[medium] text-[17px] text-tc-base pb-[10px]">{review.title}</h1>}

        <p className="font-medium text-[15px] text-tc-middle leading-normal">{review.content}</p>
      </div>

      {!!reviewImageList && (
        <ul className="flex flex-row gap-[12px]">
          {reviewImageList.map((n, i) => (
            <li key={`${review.id}-${i}`}>
              <figure className="w-[190px] h-[190px] border-[1px] border-line rounded-[5px] overflow-hidden mobile:h-[100px] mobile:w-[100px] ">
                <Image src={n} width={190} height={190} alt={`${EnumListType[listType]} 이미지`} />
              </figure>
            </li>
          ))}
        </ul>
      )}

      {isCurrentUser && (
        <ReviewBtnGroup productId={productId} userId={currentUserId} reviewId={review.id} listType={listType} />
      )}
    </div>
  );
};

export default ReviewItem;
