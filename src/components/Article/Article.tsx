import React from "react";
import styles from "./Article.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleArticleModal } from "../../redux/slices/appSlice";
import ModalComponent from "../Modals/ModalComponent";
import ArticleModal from "./ArticleModal";
interface IArticle {
  article: any;
}
const Article = ({ article }: IArticle) => {
  const dispatch = useAppDispatch();
  const { title, author, publishedAt, urlToImage, description } = article;
  const date = new Date(Date.parse(publishedAt)).toDateString();

  const view: boolean = useAppSelector((state) => state.appState.viewToggle);
  const articleModal: boolean = useAppSelector(
    (state) => state.appState.articleModal
  );
  const articleImg = urlToImage === null ? "/breaking_news.jpeg" : urlToImage;
  return (
    <>
      <div className={view ? styles.container_list : styles.container_gird}>
        <div className={styles.image_container}>
          <img src={articleImg} alt="article_image" />
        </div>
        <div
          className={styles.info}
          onClick={() => dispatch(toggleArticleModal(!articleModal))}
        >
          <div className={styles.top_info}>
            <span>{title}</span>
            <span className={styles.read_more}>{description}</span>
            {view && <span>Read More...</span>}
          </div>
          <div className={styles.bottom_info}>
            <span>{author}</span>
            <span>{date}</span>
            {!view && <span>Read More...</span>}
          </div>
        </div>
      </div>
      {articleModal && (
        <ModalComponent
          modal={articleModal}
          close={() => dispatch(toggleArticleModal(false))}
        >
          {<ArticleModal article={article} />}
        </ModalComponent>
      )}
    </>
  );
};

export default Article;
