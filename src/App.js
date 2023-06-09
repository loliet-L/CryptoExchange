import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import { Layout,Topography,Space, Typography } from 'antd';
import  { Navbar,Homepage,Exchanges,CryptoCurrencies,CryptoDetails,News }  from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>

    <div className='navbar'>
        <Navbar/>
    </div>

    <div className='main'>
      <Layout>
        <div className='routes'>
          <Routes>
          <Route path='/' element={<Homepage/>}> 
          </Route>
            <Route path='/exchanges' element={<Exchanges/>}>
            </Route>
            <Route path='/cryptocurrencies' element={<CryptoCurrencies/>}>   
            </Route>
            <Route  path='/crypto/:coinId' element={<CryptoDetails/>}>
            </Route>
            <Route exact path='/news' element={<News/>}>
            </Route>
          </Routes>

        </div>
      </Layout>

    
    <div className='footer'  >
      <Typography.Title level={5} style={{color:'white' ,textAlign:'center'}}>
        CryptoVerse <br />
        All Rights Reserved
      </Typography.Title>
      <Space>
        <Link to="./">Home</Link>
        <Link to="./exchanges">Exchanges</Link>
        <Link to="./news">News</Link>
      </Space>
    </div>
    </div>
    
    </div>
  )
};

export default App