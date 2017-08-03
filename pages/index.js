import Search from './components/Search';
import List from './components/List';

// styles
import {injectGlobal} from './styled/global.styles';
import {Container} from './styled/general.styles';

const Index = () => (
  <Container>
    <Search />
    <List />
  </Container>
)

export default Index;
