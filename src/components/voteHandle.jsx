import * as api from "../api";
import { useState, useEffect } from "react";

const VoteHandle = (props) => {
  
  const [currentVotes, setVotes] = useState(0);
  const handleVote = (value) => {
		setVotes((currentCount) => {
			return currentCount + value});
		api.voteOnArticle(props.article_id, value).catch((err) =>{
      console.dir(err, 'ERR')
    })
	}
  return(<div>
    <p className="article_votes">Votes: {props.votes + currentVotes}</p>
  	<button onClick={() => {handleVote(1);}}>
					Upvote Article <i className="arrow up"></i>
				</button>
				<button	onClick={() => {handleVote(-1);}}>
					Downvote Article <i className="arrow down"></i>
				</button>
        </div>
  )
};

export default VoteHandle;