import Banner from "@/components/Banner";
import CardCarousel from "@/components/CardCarousel";
import CardLists from "@/components/CardLists";
import Carousel from "@/components/Carousel";
import Section from "@/components/layout/Section";
import { getAllProduct, getFixedReview } from "@/service/table";
import { getBanner } from "@/service/table/banner";
import { ExtendFixedReview, ProductProperties } from "@/types/db";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const items = await getAllProduct();
  const reviews = await getFixedReview();
  const main01Banner = await getBanner("main-1");
  const main02Banner = await getBanner("main-2");
  const discountFilteredItems = items
    .filter((item: ProductProperties) => item.percentage_off !== 0)
    .sort((a: ProductProperties, b: ProductProperties) => {
      if (a.percentage_off! < b.percentage_off!) {
        return 1;
      }
      if (a.percentage_off! > b.percentage_off!) {
        return -1;
      }
      return 0;
    })
    .slice(0, 8);

  const viewSortedItems = items
    .sort((a: ProductProperties, b: ProductProperties) => {
      if (a.view! < b.view!) {
        return 1;
      }
      if (a.view! > b.view!) {
        return -1;
      }
      return 0;
    })
    .slice(0, 8);

  return (
    <div className="flex flex-col ">
      {/* <div className=" bg-slate-300 w-[1200px] h-[450px] mb-[200px]">케러셀</div> */}
      <Carousel />
      <Section title="욜루오션 BIG SALE 👍" isCenter={false}>
        <div className="mobile:hidden">
          <CardLists cardLists={discountFilteredItems} />
        </div>
        <div className="hidden mobile:block">
          <CardCarousel cardLists={discountFilteredItems} />
        </div>
      </Section>
      {main02Banner && <Banner banner={main01Banner!} />}

      <Section title="욜루오션 HOT 아이템 ❤️" isCenter={false}>
        <div className="mobile:hidden">
          <CardLists cardLists={viewSortedItems} />
        </div>
        <div className="hidden mobile:block">
          <CardCarousel cardLists={viewSortedItems} />
        </div>
      </Section>
      {main01Banner && <Banner banner={main02Banner!} />}

      <Section title="재밌게 즐기구 돌아왔션 ✌️" isCenter={false}>
        <div className="grid grid-cols-4 gap-[30px]  mobile:gap-[10px] tablet:gap-[15px]  mobile:grid-cols-2 tablet:grid-cols-3">
          {reviews.map((fixedReview: ExtendFixedReview) => (
            <Link key={fixedReview.id} href={`/product/${fixedReview.review.product_id}#후기`}>
              <div>
                <img
                  className="mobile:max-w-[160px] mobile:h-[160px] tablet:max-w-[180px] tablet:h-[180px] max-w-[246px] w-full h-[246px] bg-bg "
                  src={fixedReview.review.url[0]}
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
