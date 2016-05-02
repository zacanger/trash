import React  from 'react'
import Search from './Search'

const Main = ({children, history}) => {
  return (
    <div>
      <nav>
        <Search history={history} />
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default Main

