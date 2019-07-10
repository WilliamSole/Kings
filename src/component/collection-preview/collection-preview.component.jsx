import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

// Shows items and limits them to 4 on the shop page
const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title}</TitleContainer>
        <PreviewContainer>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;