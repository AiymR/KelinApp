import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import Feed from "../Feed/Feed";


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
                    </ul>
                </nav>

                <Route path="/" exact component={Signup} />
                <Route path="/feed/" component={Feed} />
            </div>
        </Router>
    );
}

export default AppRouter;
