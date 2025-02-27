import { AboutThisTool } from "../../components/AboutThisTool/AboutThisTool";
import { PopularPages } from "../../components/PopularPages/PopularPages";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  return (
    <>
      <Search />
      <PopularPages />
      <AboutThisTool />
    </>
  );
};
