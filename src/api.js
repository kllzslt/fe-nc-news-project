import axios from "axios";
const api = axios.create({
	baseURL: "https://lc-nc-news.herokuapp.com/api",
});

export function fetchAllArticles() {
	return api
		.get("/articles")
		.then(({ data: { articles } }) => {
			return articles;
		})
		.catch((err) => {
			console.log(err);
		});
}

export function fetchArticlesByTopic(topic) {
	return api
		.get(`/articles?topic=${topic}`)
		.then(({ data: { articles } }) => {
			return articles;
		})
		.catch((err) => {
			console.log(err);
		});
}

export function fetchAllTopics() {
	return api
		.get("/topics")
		.then(({ data: { topics } }) => {
			return topics;
		})
		.catch((err) => {
			console.log(err);
		});
}

export function fetchArticleById(article_id) {
	return api
		.get(`/articles/${article_id}`)
		.then(({ data: { article } }) => {
			console.log(article);
			return article;
		})
		.catch((err) => {
			console.log(err);
		});
}

export function voteOnArticle(article_id, vote) {
	return api
		.patch(`/articles/${article_id}`, { inc_votes: vote })
		.then(({ data: { article } }) => {
			console.log(article, 'ARTICLE')
			return article;
		});
}

export function fetchCommentsByArticleId(article_id) {
	return api
		.get(`/articles/${article_id}/comments`)
		.then(({ data: { article_comments } }) => {
			return article_comments;
		})
		.catch((err) => {
			console.log(err);
		});
}