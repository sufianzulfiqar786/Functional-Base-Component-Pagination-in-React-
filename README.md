1# Run Router in React:

npm Install:
npm install react-router-dom

Import:
import { BrowserRouter, Route, Routes } from 'react-router-dom';

Code use in Return (app.js):

<!-- <BrowserRouter>

        <Header />         component

        <Routes>

          <Route path="/" element={<Home />} />                             page
          <Route path="/About_Us" element={<About_Us />} />                 page
          <Route path="/Our_Products" element={<Our_Products />} />         page    
          <Route path="/Why_IVY" element={<Why_IVY />} />                   page        
          <Route path="/Blogs" element={<Blogs />} />                       page        
          <Route path="/Api_Practice" element={<Api_Practice />} />         page    
          <Route path="/Login" element={<Login />} />                       page        
          <Route path="/SignIn" element={<SignIn />} />                     page    
          <Route path="/PostForm" element={<PostForm />} /> 
                          page    
        </Routes>

        <LastMainSlider/>  component
        <Footer />         component

      </BrowserRouter> -->










2# React Hook:

*Fetching API:

npm Install:
npm install react-axios

*Import:
import React,  { useState, useEffect } from 'react'

*Variabel:

const [posts, setPosts] = useState([])

*code:

useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {

                setPosts(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



*JSX Code:

 return (
    <div>
      {

        posts.map((p) => {
          return (

            <div className="col-md-4">

              <div className="card my-4" >

                <div className="imgCard">

                  <img src={p.url} alt="" />

                </div>

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  {/* <p className="card-text">{posts.filter(p => p.id === 5).map(post => <p> {post.title.slice(0, 18)} </p>)}</p> */}
                  <p className="card-text">{posts.filter(p => p.id === 5).map(post => <p> {post.title.slice(0, 18)} </p>)}</p>
                </div>
              </div>

            </div>


          )
        })
        s}


    </div>
  );






3# Paginate Install:

npm i react-paginate


*Import:

import ReactPaginate from "react-paginate";


*Code:

from Github: github.com/sufianzulfiqar786/


4# Load More Install: ( None )


*Import: ( None )

*JSX Code: 

From Github.com/sufianzulfiqar786