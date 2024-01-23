import React, { useEffect, useState } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import axios from "axios";

const Homepage = () => {
  const [mensKurta, setMensKurta] = useState([]);
  const [shirt, setShirt] = useState([]);
  const [mensJeans, setMensJeans] = useState([]);
  const [womenDress, setWomenDress] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:5454/api/products/categories_products?categories=shirt&categories=men_jeans&categories=mens_kurta&categories=women_dress&categories=top&color=&size=&minPrice=0&maxPrice=10000&minDiscount=0&stock=null&sort=price_low&pageNumber=0&pageSize=1000"
      );
      const mensKurtaData = res.data.content.filter(
        (item) => item.category.name === "mens_kurta"
      );
      const shirtData = res.data.content.filter(
        (item) => item.category.name === "shirt"
      );
      const mensJeansData = res.data.content.filter(
        (item) => item.category.name === "men_jeans"
      );
      const womenDressData = res.data.content.filter(
        (item) => item.category.name === "women_dress"
      );
      const topData = res.data.content.filter(
        (item) => item.category.name === "top"
      );
      setMensKurta(mensKurtaData);
      setShirt(shirtData);
      setMensJeans(mensJeansData);
      setWomenDress(womenDressData);
      setTop(topData);
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection
          data={mensKurta}
          section={"Men's Kurta"}
          category={mensKurta[0]?.category?.name}
        />
        <HomeProductSection
          data={mensJeans}
          section={"Men's Jeans"}
          category={mensJeans[0]?.category?.name}
        />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection
          data={shirt}
          section={"Shirt"}
          category={shirt[0]?.category?.name}
        />
        <HomeProductSection
          data={womenDress}
          section={"Women's Dress"}
          category={womenDress[0]?.category?.name}
        />
        <HomeProductSection
          data={top}
          section={"Women's Top"}
          category={top[0]?.category?.name}
        />
      </div>
    </div>
  );
};

export default Homepage;
