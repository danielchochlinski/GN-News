import { useParams } from "react-router-dom";

import List from "../../components/List.tsx/List";

const CountryView = () => {
  const { id } = useParams();
  const URL = `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=${process.env.REACT_APP_API_KEY}`;
  console.log(URL);
  return <List API_URL={URL} />;
};

export default CountryView;
