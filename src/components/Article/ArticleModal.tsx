import React from "react";
import styles from "./ArticleModal.module.scss";
interface TArticleModal {
  article: any;
}
const ArticleModal = ({ article }: TArticleModal) => {
  const { author, content, url } = article;
  console.log(article);
  return (
    <div className={styles.container}>
      <span>{author}</span>
      <p>{content}</p>
      <a href={url} target="_blank" rel="noreferrer">
        Link to article
      </a>
    </div>
  );
};

export default ArticleModal;
