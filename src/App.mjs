import React, { lazy, Suspense} from 'react'

const LazyApp = lazy(async () => (import('./Lazy.mjs')))

export const App = () =>
  (<Suspense fallback={<>Loading ...</>}>
    <LazyApp />
  </Suspense>)
