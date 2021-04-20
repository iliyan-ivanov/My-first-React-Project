import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/HomePage/HomePage';
import Sections from './components/Main/Sections';
import Footer from './components/Footer/Footer';
import ArticlePage from './components/Main/Articles/ArticlePage';
import Login from './components/Main/AuthPages/Login';
import Register from './components/Main/AuthPages/Register';
import Create from './components/Main/CreatePage/Create';
import { auth } from './config/firebase';
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import isAuth from './hoc/isAuth';

function App() {

    const [user, setUser] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, [])

    return (
        <div className="app">
            <AuthContext.Provider value={user}>
                
                <Header />

                <Switch>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <Route path="/europianfootball" component={() => <Sections title="Europian Football" />} />
                    <Route path="/bulgarianfootball" component={() => <Sections title="Bulgarian Football" />} />
                    <Route path="/nationalteams" component={() => <Sections title="National Teams" />} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/create" component={isAuth(Create)} />
                    <Route path="/:category/:articleId" component={ArticlePage} />
                    <Route render={() => <div className="errorPage"> <h1>Your url is not valid!</h1><h1>Please insert valid url!</h1> </div>} />
                </Switch>

                <Footer />

            </AuthContext.Provider>
        </div>
    );
}

export default App;
