import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../component/spinner/spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() => import('../../component/collections-overview/collections-overview.container'));
const CollectionsPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
            </Suspense>
        </ShopPageContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);