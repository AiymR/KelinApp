import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Signup from "../Signup/Signup";
import Feed from "../Feed/Feed";
import Chat from "../Chat/Chat";
import Profile from "../Profile/Profile";
import EditProfile from "../Profile/EditProfile";
function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Signup</Link>
                        </li>
                        <li>
                            <Link to="/feed/">Feed</Link>
                        </li>
                        <li>
                            <Link to="/chat/">Chat</Link>
                        </li>
                        <li>
                            <Link to="/profile/">Profile</Link>
                        </li>
                        <li>
                            <Link to="/editprofile/">Edit Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Signup} />
                <Route path="/feed/" component={Feed} />
                <Route path="/chat/" component={Chat} />
                <Route path="/profile/" component={Profile} />
                <Route path="/editprofile/" component={EditProfile} />
            </div>
        </Router>
    );
}

export default AppRouter;
