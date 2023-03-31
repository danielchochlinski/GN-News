import { useAppSelector } from "../../app/hooks";
import List from "../../components/List.tsx/List";

const MainView = () => {
  const newsOutle = useAppSelector((state) => state.appState.newsOutlet);
  console.log(newsOutle);
  const GET_NEWS_URL = `https://newsapi.org/v2/top-headlines?sources=${newsOutle}-news&apiKey=${process.env.REACT_APP_API_KEY}`;
  return <List API_URL={GET_NEWS_URL} />;
};

export default MainView;
