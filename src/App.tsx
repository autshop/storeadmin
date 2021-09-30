import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserHistory } from "history";
//
import { AppActions } from "redux/app/slice";
import appSelectors from "redux/app/selectors";
import LoadingScreen from "components/common/LoadingScreen";
import { Route, Router, Switch } from "react-router-dom";
import RouteGuard from "./components/common/RouteGuard";

const App: FC = () => {
    const isAppInitialized = useSelector(appSelectors.getIsInitialized);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AppActions.initializeAppRequest());
    }, [dispatch]);

    if (!isAppInitialized) {
        return <LoadingScreen />;
    }

    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/login" exact>
                    <RouteGuard inverse redirectTo={"/"}>
                        {null}
                    </RouteGuard>
                </Route>
                <Route path="/new-shop" exact>
                    <RouteGuard>{null}</RouteGuard>
                </Route>
                <Route path="/" exact>
                    <RouteGuard>{null}</RouteGuard>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
