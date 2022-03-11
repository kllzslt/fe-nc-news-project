import * as React from "react";

const CommentList = (comment) => {
	return (
		<div>
			<ul>
				<li>
						Avatar alt={comment.author} src="./gavatar.svg"
				</li>
					<span>
						primary={comment.author}
						secondary={comment.body}
          </span>
          <span primary="Votes: " secondary={comment.votes} />
				<span primary="Created at: " secondary={comment.created_at} />
			</ul>
		</div>
	);
};

export default CommentList;