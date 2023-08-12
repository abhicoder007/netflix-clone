import React from 'react'
import Row from './Row'
import './requests'
import Banner from './Banner'
import Detail from './Detail'
import "./App.css"
// const t=request.fetchTrending;
const App = () => {
  return (
    <div className='App'>
      <Banner/>
      
       <Row title="TRENDING" fetchUrl={1} is/> 
       <Row title="TOPRATED" fetchUrl={2}/> 
       <Row title="ACTION" fetchUrl={3}/> 
       <Row title="HORROR" fetchUrl={4}/> 
       <Row title="ROMANCE" fetchUrl={5}/> 
       <Row title="COMEDY" fetchUrl={6}/> 
       <Detail/>
    </div>
  )
}

export default App