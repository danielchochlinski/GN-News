/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import axios from "axios";
import Article from "../Article/Article";
import styles from "./List.module.scss";
import { setNewsLenght } from "../../redux/slices/appSlice";

interface IList {
  API_URL: string;
}
const List = ({ API_URL }: IList) => {
  const view: boolean = useAppSelector((state) => state.appState.viewToggle);
  const dispatch = useAppDispatch();
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try {
      const response = await axios.get(API_URL);
      setNews(response.data.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNews();
  }, [API_URL]);

  useEffect(() => {
    dispatch(setNewsLenght(news.length));
  }, [news]);
  return (
    <div className={view ? styles.container_list : styles.container_grid}>
      {news?.map((el, i) => (
        <Article article={el} key={i} />
      ))}
    </div>
  );
};

export default List;
