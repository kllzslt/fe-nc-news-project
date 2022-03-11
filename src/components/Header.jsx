import { useState } from "react";
import { userContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
	const [user, setUser] = useState({
		username: "Guest",
		avatar_url:
			"./gavatar.svg",
		kudos: 0,
	});

	return (
		<userContext.Provider value={{ user, setUser }}>
			<header className="Header">
				<h1 className="logo">
        <Link to="/">
          <img src="./NEWS256.svg" alt="logo" />
				</Link>
				</h1>

				<div className="userInfo">
					<ul key="userInfo">
						<li key="username">
							<span className="username">{user.username}</span>
						</li>
						<li key="avatar_img" className="avatar">
							<img src={user.avatar_url} alt={user.username} />
						</li>
					</ul>
				</div>
			</header>
		</userContext.Provider>
	);
};

export default Header;