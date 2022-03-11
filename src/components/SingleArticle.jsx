import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
	const [articles, setArticles] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	const [currentVotes, setVotes] = useState(0);
	const [err, setErr] = useState(null);

	const handleVote = (value) => {
		setVotes((currentVotes) => currentVotes + value);
		setErr(null);
		api.voteOnArticle(article_id, value).catch((err) => {
			if (value) setVotes((votes) => votes - value);
			setErr("Vote failed, please try again");
		});
	};

	useEffect(() => {
		setIsLoading(true)
		if (article_id) {
			api.fetchArticleById(article_id).then((data) => {
				setArticles(data);
				setIsLoading(false);
			});
		}
	}, [article_id]);

	if (isLoading) return <p>Please wait until the page is loading...</p>;
	const published = articles.created_at.toString().slice(0, 10);

	return (
		<main className="container">
			<div className="singleArticle">
				<h1 className="article_title">{articles.title}</h1>
				<h2 className="article_author">Author: {articles.author}</h2>
				<h3 className="article_topic">Topic: {articles.topic}</h3>
				<p className="article_created_at">{published}</p>
				<p className="article_votes">Votes: {articles.votes}</p>
				<p className="article_comment_count">Comments: {articles.comment_count}</p>
				<button onClick={() => {handleVote(1);}}>
					Upvote Article <i className="arrow up"></i>
				</button>
				{err ? <p>{err}</p> : null}
				<button	onClick={() => {handleVote(-1);}}>
					Downvote Article <i className="arrow down"></i>
				</button>
			</div>
		</main>
	);
};

export default SingleArticle;