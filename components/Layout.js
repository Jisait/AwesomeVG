import ArticlesContainer from "./ArticlesContainer"

export default function Layout({ children }) {
    return (
      <>
        <ArticlesContainer />
        <main>{children}</main>

      </>
    )
  }