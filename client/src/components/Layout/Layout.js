import Header from 'src/components/Header';

import { $Container, $PageWrapper } from './styles';

const Layout = (props) => {
  return (
    <$PageWrapper>
      <div>
        <Header />
      </div>
      <div>
        <$Container>{props.children}</$Container>
      </div>
    </$PageWrapper>
  );
};

export default Layout;
