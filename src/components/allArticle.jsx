import { useEffect, useState } from "react";
import SingleArticle from "./singleArticle";
import * as api from "https://back-end-nc-news-project.herokuapp.com/api";

export default function AllArticle({ sortByCategory }) {
  const [items, setItems] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sortByCategory === "all" || sortByCategory === "Select all") {
      api.fetchItems().then((items) => {
        setItems(items);
        setIsLoading(false);
      });
    } else {
      api.fetchByCategory(sortByCategory).then((items) => {
        setItems(items);
        setIsLoading(false);
      });
    }
  }, [sortByCategory]);

  // function shuffle(sourceArray) {
  //   //Fisher-Yates-Durstenfeld shuffle
  //   for (let i = 0; i < sourceArray.length - 1; i++) {
  //     let j = i + Math.floor(Math.random() * (sourceArray.length - i));
  //     let temp = sourceArray[j];
  //     sourceArray[j] = sourceArray[i];
  //     sourceArray[i] = temp;
  //   }
  //   return sourceArray;
  // }

  // const shuffleItems = shuffle(items);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="all-article">
      {items.map(
        ({
          article_id,
          title,
          topic,
          created_at,
          votes,
          author,
          comment_count,
        }) => {
          return (
            <SingleArticle
              key={article_id}
              articleId={article_id}
              articleTitle={title}
              articleTopic={topic}
              articleCreatedAt={created_at}
              articleVotes={votes}
              articleAuthor={author}
              articleCommentCount={comment_count}
            />
          );
        }
      )}
    </section>
  );
}