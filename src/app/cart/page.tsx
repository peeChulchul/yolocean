"use client";
import React, { useEffect, useState } from "react";
import Section from "@/components/layout/Section";
import CartItem from "./CartItem";
import { useCart } from "@/hooks";
import Link from "next/link";
import PageBreadCrumb from "@/components/layout/PageBreadCrumb";
import { CartBox } from "@/types/db";
import { useQuery } from "@tanstack/react-query";
import useLogedInStore from "@/store/logedStore";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

const linkList = [
  {
    name: "홈",
    url: "https://yolocean.vercel.app/"
  },
  {
    name: "장바구니",
    url: "https://yolocean.vercel.app/cart"
  }
];

const Page = () => {
  const router = useRouter();
  //로그인 여부 확인
  const { logedIn } = useLogedInStore();

  const { auth } = useAuthStore();

  const { cart, isLoading } = useCart({ userId: auth, cartId: "" });

  const [cartPrice, setCartPrice] = useState<number[]>([]);
  const [originPrice, setOriginPrice] = useState<number[]>([]);

  //로그인 했는지 ▷ 로딩중인지 ▷ 카트가 불러와졌는지 ▷ 카트가 비어있는지
  return (
    <>
      <PageBreadCrumb linkList={linkList} />
      <Section title={"장바구니"} isCenter={true}>
        {logedIn ? (
          !isLoading ? (
            cart !== undefined ? (
              cart.length !== 0 ? (
                <div>
                  <div className="flex flex-col items-center justify-center">
                    {(cart as CartBox[]).map((cartItem, idx) => {
                      return (
                        cartItem && (
                          <CartItem
                            cart={cartItem}
                            cartPrice={cartPrice}
                            setCartPrice={setCartPrice}
                            originPrice={originPrice}
                            setOriginPrice={setOriginPrice}
                            idx={idx}
                            key={cartItem.id}
                          />
                        )
                      );
                    })}
                  </div>

                  <div className="mt-[80px] flex flex-col content-end">
                    <div className="mb-[30px]">
                      <div className="text-right text-[16px] font-bold mr-1">
                        총 결제금액
                        <p className="text-[24px] font-bold inline-block ml-1">
                          {" "}
                          {cartPrice.reduce((acc, num) => acc + num, 0)}원
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => router.push("/payment")}
                      className="w-[244px] h-[50px] bg-point text-white rounded-[5px] ml-[80%]"
                    >
                      결제하기
                    </button>
                  </div>
                </div>
              ) : (
                <div>카트가 비어있습니다</div>
              )
            ) : (
              <div>카트 불러오는 중...</div>
            )
          ) : (
            <div>Loading...</div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center space-y-5">
            <p>로그인 후 이용하세요</p>
            <Link href={"/auth"} className="text-[18px] text-point font-bold">
              로그인 하기
            </Link>
          </div>
        )}
      </Section>
    </>
  );
};

export default Page;