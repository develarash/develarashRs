import React from 'react'
import { Link } from 'react-router-dom'
function Authorized() {
  return (
    <div className='Authorizedcompnent'>
        <h1>401</h1>
        <h2>Authorized</h2>
        <Link  to={"/"}>Back to the home page</Link>
    </div>
  )
}

export default Authorized