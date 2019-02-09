import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Flex from "./Flex";
import FullScreen from "./FullScreen/index";

export default class Home extends React.PureComponent{
    render(){
        return (
            <Router>
                <div>
                    {/*<ul className="nav">*/}
                        {/*<li><Link to="/">App</Link></li>*/}
                        {/*<li><Link to="/Flex">Flex</Link></li>*/}
                        {/*<li><Link to="/FullScreen">FullScreen</Link></li>*/}
                    {/*</ul>*/}
                    {/*<hr />*/}
                    <Route exact path="/" component={App} />
                    <Route path="/Flex" component={Flex} />
                    <Route path="/FullScreen" component={FullScreen} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
