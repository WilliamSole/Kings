import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import ColelctionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
       <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={ColelctionPage} />
    </div>
);

export default ShopPage;