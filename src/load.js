import { Location } from 'history'
import { Databeat } from '@databeat/tracker'

export const analytics = new Databeat('https://dev-databeat.sequence.app', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzZXEtZG9jcyIsImV4cCI6MTcxMjIxNDYzNn0.lXGjMbA5ReAGTywkvBNOoGCfwMpHv55Eoy2P5a-bY8o')

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    analytics.trackView()
  }
}

// export function onRouteUpdate({ location, previousLocation }) {
//   if (location.pathname !== previousLocation?.pathname) {
//     console.log('onRouteUpdate', location.pathname, previousLocation?.pathname)
//   }
//   return undefined
// }
