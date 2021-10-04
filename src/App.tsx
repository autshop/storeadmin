import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
//
import { AppActions } from "redux/app/slice";
import appSelectors from "redux/app/selectors";
import LoadingScreen from "components/common/LoadingScreen";
import RouteGuard from "components/common/RouteGuard";
import Products from "components/pages/Products";
import Orders from "components/pages/Orders";
import Product from "components/pages/Product";
import Order from "components/pages/Order";
import { ProductActions } from "redux/product/slice";
import { VariantActions } from "redux/variant/slice";
import { CollectionActions } from "redux/collection/slice";
//
import "./styles/global.style.scss";

const App: FC = () => {
    const isAppInitialized = useSelector(appSelectors.getIsInitialized);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AppActions.initializeAppRequest());

        dispatch(ProductActions.loadProductsRequest());
        dispatch(VariantActions.loadVariantsRequest());
        dispatch(CollectionActions.loadCollectionsRequest());
    }, [dispatch]);

    if (!isAppInitialized) {
        return <LoadingScreen />;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact>
                    <RouteGuard inverse redirectTo={"/products"}>
                        {null}
                    </RouteGuard>
                </Route>
                <Route path="/products" exact>
                    <RouteGuard>
                        <Products />
                    </RouteGuard>
                </Route>
                <Route path="/orders" exact>
                    <RouteGuard>
                        <Orders />
                    </RouteGuard>
                </Route>
                <Route path="/orders/:id" exact>
                    <RouteGuard>
                        <Order />
                    </RouteGuard>
                </Route>
                <Route path="/products/:id" exact>
                    <RouteGuard>
                        <Product />
                    </RouteGuard>
                </Route>
                <Route path="/">
                    <Redirect to="/products" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
