import Banner from "../components/home/Banner";
import FeaturedCategories from "../components/home/FeaturedCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <FeaturedCategories></FeaturedCategories>
      </div>
    </div>
  );
};

export default Home;
