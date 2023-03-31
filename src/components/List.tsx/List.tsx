/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import axios from "axios";
import Article from "../Article/Article";
import styles from "./List.module.scss";
import {
  setLoadingFalse,
  setLoadingTrue,
  setNewsLenght,
} from "../../redux/slices/appSlice";
import { Dna } from "react-loader-spinner";

interface IList {
  API_URL: string;
}
const List = ({ API_URL }: IList) => {
  const view: boolean = useAppSelector((state) => state.appState.viewToggle);
  const dispatch = useAppDispatch();
  const [news, setNews] = useState([]);
  const loadingState = useAppSelector((state) => state.appState.loading);
  const getNews = async () => {
    try {
      dispatch(setLoadingTrue(true));
      const response = await axios.get(API_URL);
      setNews(response.data.articles);
      dispatch(setLoadingFalse(false));
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
    <>
      {loadingState ? (
        <div className={styles.loading}>
          <Dna />
        </div>
      ) : (
        <div className={view ? styles.container_list : styles.container_grid}>
          {news?.map((el, i) => (
            <Article article={el} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
