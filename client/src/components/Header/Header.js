import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';

import { $Header, $Logo } from './styles';

const Header = ({ example }) => {
  return (
    <$Header>
      <$Logo>
        <Link to="/">Node React Starter</Link>
        {example}
      </$Logo>
    </$Header>
  );
};

Header.propTypes = {
  example: string.isRequired,
};

export default Header;
