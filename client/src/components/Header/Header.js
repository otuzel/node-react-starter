import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';

import { $Container, $Logo, $SummaryWrapper } from './styles';

const Header = ({ example }) => {
  return (
    <>
      <div>
        <$Container>
          <$Logo>
            <Link to="/">Logo</Link>
          </$Logo>
        </$Container>
      </div>

      <div>
        <$Container>Controls</$Container>
      </div>

      <$SummaryWrapper>
        <$Container>Controls summary</$Container>
      </$SummaryWrapper>
    </>
  );
};

Header.propTypes = {
  example: string,
};

export default Header;
