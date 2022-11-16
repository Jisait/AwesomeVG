import styles from '../styles/TopArticle.module.css';
import Link from "next/link"
import { useDispatch } from 'react-redux';
import { addArticlesToStore } from '../reducers/articles';

function TopArticle(props) {

  let formImg = {borderRadius: "35px 5px 5px 5px"}
  props.id === 0 ? formImg = {borderRadius: "35px 5px 5px 5px"} : props.id === 1 ? formImg = {borderRadius: "5px 5px 5px 5px"} : props.id === 2 ? formImg = {borderRadius: "5px 5px 5px 35px"} : formImg = {borderRadius: "35px 5px 5px 5px"}

  let formContainer = {borderRadius: "35px 5px 5px 5px"}
  props.id === 0 ? formContainer = {borderRadius: "35px 35px 5px 5px"} : props.id === 1 ? formContainer = {borderRadius: "5px 5px 5px 5px"} : props.id === 2 ? formContainer = {borderRadius: "5px 5px 35px 35px"} : formContainer = {borderRadius: "35px 5px 5px 5px"}


  const dispatch = useDispatch();
  const addArticle = (data) => {
  dispatch(addArticlesToStore(data)); 
  }

  return (
    <Link href="/article">
    
      <div onClick={() => addArticle(props)} style={formContainer} className={styles.container}>
      <img style={formImg} className={styles.image} src={props.image}/>
         <div className={styles.contentContainer}>
          <div className={styles.news}>news</div>
          <div className={styles.content}>{props.title}</div>
          <div className={styles.date}>10/05/2022</div>
     
        </div>
      </div>

    </Link>
  );
}

export default TopArticle;
