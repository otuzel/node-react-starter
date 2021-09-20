import styled from 'styled-components';

import { container } from 'src/styles/mixins';

export const $Container = styled.div`
  ${container}
`;

export const $Logo = styled.div`
  height: 55px;
  width: 135px;
  > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const $SummaryWrapper = styled.div`
  background: #efefef;
  border-bottom: 1px solid #dbdbdb;
  border-top: 1px solid #c5c5c5;
`;
