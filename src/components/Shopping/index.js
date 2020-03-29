import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import ShoppingList from './ShoppingList';
import Shopping from './Shopping';

const ShoppingPage = () => (
    <Switch>
      <Route exact path={ROUTES.SHOPPING_LIST} component={ShoppingList} />
      <Route exact path={ROUTES.SHOPPING} component={Shopping} />
      <Route exact path={ROUTES.LANDING} component={Shopping} />
    </Switch>
);

export default ShoppingPage;
