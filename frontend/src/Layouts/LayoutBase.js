import React from 'react'
import { renderRoutes } from 'react-router-config'

// Pure Function - Standard Layout
const LayoutBase = ({ route, state }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)

export default LayoutBase
