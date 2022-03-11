import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VoteHandle from "../components/voteHandle"
import Comments from "./Comments";

const SingleArticle = () => {
	const [articles, setArticles] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	
	
	useEffect(() => {
		setIsLoading(true)
			if (article_id) {
				api.fetchArticleById(article_id).then((data) => {
					setArticles(data);
				setIsLoading(false);
				});
		}
		if (article_id) {
			api.fetchCommentsByArticleId(article_id).then((article_comments) => {
				setComments(article_comments);
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
				<p className="article_body">{articles.body}</p>
				<h3 className="article_topic">Topic: {articles.topic}</h3>
				<p className="article_created_at">{published}</p>
				
				<p className="article_comment_count">Comments: {articles.comment_count}</p>
				<VoteHandle votes={articles.votes} article_id={article_id} />
				<Comments	comments={comments}
					article_id={article_id}
					comment_count={articles.comment_count}
					setComments={setComments}
				/>
			</div>
		</main>
	);
};

export default SingleArticle;