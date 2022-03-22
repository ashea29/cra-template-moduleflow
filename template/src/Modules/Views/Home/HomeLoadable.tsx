import loadable from '@loadable/component'
import pTimeout from 'p-timeout';
import pMinDelay from 'p-min-delay'



const FallbackComponent = loadable(() =>
  pMinDelay('Loading...', 300)
)

const HomeLoadable = loadable(() =>
  pTimeout(import('./Home'), 10000, 'Element failed to load'), {
    fallback: <FallbackComponent />
  }
)


export default HomeLoadable