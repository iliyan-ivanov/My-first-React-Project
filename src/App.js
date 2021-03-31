import { Route, Link, NavLink, Redirect, Switch, Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/HomePage/Main';
import EUFootball from './components/Main/EUFootballPage';
import BGFootball from './components/Main/BGFootballPage';
import WorldFootball from './components/Main/WorldFootballPage'
import Footer from './components/Footer/Footer';
import ArticlePage from './components/Main/Articles/ArticlePage';
import Login from './components/Main/AuthPages/Login';
import Register from './components/Main/AuthPages/Register';
import Create from './components/Main/AuthPages/Create';

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/europianfootball" component={EUFootball}/>
                <Route path="/bulgarianfootball" component={BGFootball}/>
                <Route path="/worldfootball" component={WorldFootball}/>
                <Route path="/articleinfo" component={ArticlePage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/create" component={Create} />
                <Route render={() => <h1>Please insert valid url!</h1>} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
