import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "../src/components/ArticleList";
import SingleArticle from "../src/components/SingleArticle";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/topic/:topic" element={<Home />} />
					<Route path="/articles/:article_id" element={<SingleArticle />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;