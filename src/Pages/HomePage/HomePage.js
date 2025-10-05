import Intro from "./components/Intro";
import HomeData from "./components/HomeData";
const HomePage = () => {
  return (
    <div className="">
      <Intro />
      <HomeData
        url="https://imdb236.p.rapidapi.com/api/imdb/top250-movies"
        title="Movies"
        pagination={false}
      />
      <HomeData
        url="https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv"
        title="TV Shows"
        pagination={false}
      />
    </div>
  );
};
export default HomePage;
