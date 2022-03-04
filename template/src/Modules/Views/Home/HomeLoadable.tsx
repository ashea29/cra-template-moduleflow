import loadable from '@loadable/component'
import pTimeout from 'p-timeout';
import pMinDelay from 'p-min-delay'


const timeoutComponentPath = '../../../utilities/components/Timeout'
const loaderComponentPath = '../../../utilities/components/FullscreenSpinner'

const FallbackComponent = loadable(() =>
  pMinDelay(import(`${loaderComponentPath}`), 300)
)

const HomeLoadable = loadable(() =>
  pTimeout(import('./Home'), 10000, () => import(`${timeoutComponentPath}`)), {
    fallback: <FallbackComponent />
  }
)


export default HomeLoadable