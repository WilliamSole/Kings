import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;