import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import {useState, useEffect} from 'react'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articles from '../reducers/articles'
import critics from '../reducers/critics'

const store = configureStore({
  reducer: {articles, critics},
 });

function App({ Component, pageProps }) {

const [loader, setLoader] = useState(true)

useEffect (() => {
  setTimeout(() => {
    setLoader(false)

  }, 500)

}, [])

if (loader===true) {

  return (
    <>
    <Loader></Loader>
    </>
  )
}

  return (
    <Provider store={store}>
      <Head>
        <title>Awesome VG</title>
        <link rel="icon" href="/iconOnglet.png" />
      </Head>
      <Header/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </Provider>
  );
}

export default App;
