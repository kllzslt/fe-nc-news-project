export default function SingleArticle({
  articleId,
  articleTitle,
  articleTopic,
  articleCreatedAt,
  articleVotes,
  articleAuthor,
  articleCommentCount,
}) {
  return (
    <article className="single-article">
      {/* <div className="aspect-ratio aspect-ratio--1x1">
        <img
          //className="item-img"
          src={itemUrl}
          alt={`${articleTitle}`}
          className="db bg-center cover aspect-ratio--object"
        />
      </div> */}
      <a href="#0" className="ph2 ph0-ns pb3 link db">
        <h3 className="f5 f4-ns mb0 black-90">{articleTitle}</h3>

        <h3 className="f5 f4-ns mb0 black-90">Votes: {articleVotes}</h3>
        <h3 className="f6 f5 fw4 mt2 black-60">{articleTopic}</h3>
        <h3 className="f6 f5 fw4 mt2 black-60">Created at: {articleCreatedAt}</h3>
        <h3 className="f6 f5 fw4 mt2 black-60">Article ID: {articleId}</h3>
        <h3 className="f6 f5 fw4 mt2 black-60">
          Article author: {articleAuthor}
        </h3>
        <h3 className="f6 f5 fw4 mt2 black-60">Comment count: {articleCommentCount}</h3>
      </a>
    </article>
  );
}
