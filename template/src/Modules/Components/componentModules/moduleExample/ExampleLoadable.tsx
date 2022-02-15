import loadable from '@loadable/component'
import pTimeout from 'p-timeout';


const ExampleLoadable = loadable(() => 
  pTimeout(import('./Example'), 10000, 'Element failed to load')
)


export default ExampleLoadable