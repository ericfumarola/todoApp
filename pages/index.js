import Head from 'next/head'
import Home from './container/Home';

// styles
import {injectGlobal} from './styled/global.styles';

const Index = () => (
  <div>
    <Head>
      <title>Firebase TodoList</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <Home />
  </div>

)

export default Index;
