import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/HomePage/Main';
import EUFootball from './components/Main/Sections/EUFootballPage';
import BGFootball from './components/Main/Sections/BGFootballPage';
import NationalTeams from './components/Main/Sections/NationalTeamsPage'
import Footer from './components/Footer/Footer';
import ArticlePage from './components/Main/Articles/ArticlePage';
import Login from './components/Main/AuthPages/Login';
import Register from './components/Main/AuthPages/Register';
import Create from './components/Main/CreatePage/Create';
import { auth } from './config/firebase';
import { useEffect, useState } from 'react';

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, [])

    return (
        <div className="app">
            <Header user={user} />

            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/europianfootball" component={EUFootball} />
                <Route path="/bulgarianfootball" component={BGFootball} />
                <Route path="/nationalteams" component={NationalTeams} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/create" component={Create} />
                <Route path="/:category/:articleId" component={ArticlePage} />
                <Route render={() => <div className="errorPage"> <h1>Your url is not valid!</h1><h1>Please insert valid url!</h1> </div> } />
            </Switch>

            <Footer />

        </div>
    );
}

export default App;
