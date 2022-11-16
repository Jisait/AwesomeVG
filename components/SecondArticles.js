import styles from '../styles/SecondArticles.module.css';
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addArticlesToStore } from '../reducers/articles';
import Link from "next/link"

function SecondArticles(props) {

  const dispatch = useDispatch();
  const addArticle = (data) => {
    dispatch(addArticlesToStore(data));
  };



  return (
    <Link href="/article">
      <div
        onClick={() => addArticle(props)}
        className={styles.secondArticleContainer}
      >
        <img className={styles.image} src={props.image} />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.desc}>{props.desc}</div>
        <div className={styles.author}>
          by {props.author} - {props.date}
        </div>
      </div>
    </Link>
  );
}

export default SecondArticles;
