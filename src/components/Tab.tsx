"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface TabProps {
  activeTab: string;
  handleTabClick?: Function;
  tabs: string[];
  isVariable?: boolean;
}

const Tab = ({ activeTab, handleTabClick, tabs, isVariable = false }: TabProps) => {
  const pathName = usePathname();
  return (
    <ul className={`flex w-full items-center justify-center ${isVariable && "gap-[20px]"}`}>
      {tabs.map((tab, index) => {
        if (isVariable) {
          return (
            <li
              onClick={() => (handleTabClick as Function)(tab)}
              className={` px-[20px] py-[10px] text-center rounded-3xl cursor-pointer  border-line border    ${
                activeTab === tab ? "bg-point  text-white" : "bg-white text-tc-light"
              }`}
              key={tab}
            >
              {tab}
            </li>
          );
        } else {
          return (
            <Link
              scroll={false}
              href={{ href: `${pathName}`, query: { article: tab } }}
              key={tab}
              className={`w-[291px] text-[16px] py-[15px] px-[10px]  font-[500] text-center border-line border-b cursor-pointer  ${
                activeTab === tab ? "bg-point  text-white" : "bg-bg text-tc-base"
              }`}
              onClick={() => document?.getElementById("tab")?.scrollIntoView({ behavior: "smooth" })}
            >
              {tab}
            </Link>
          );
        }
      })}
    </ul>
  );
};

export default Tab;
