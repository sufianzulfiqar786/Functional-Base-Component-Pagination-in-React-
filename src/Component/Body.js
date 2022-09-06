import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import "../CSS/Body.css"
import {FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';


const Body = () => {
    
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(3);


    const showMoreItems = () => {
        if(visible<=posts.length-1)
        {
            setVisible((prevValue) => prevValue + 3);
        }
    }

    const showLessItems = () => {

        if(visible>=1)
        {
            setVisible((prevValue) => prevValue - 3);
        }

        
    }

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/photos')
    //         .then(res => {

    //             setPosts(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])


                                            // Both of useEffect or Correct

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then(res => res.json())
          .then((data) => setPosts(data));
      }, []);

    return (


        <>

            <div className="fullBody ">

                <div className='row ml-5'>

                    {
                        posts.slice(0, visible).map((p, i) => {
                            return (


                                <div className="col-md-4 d-flex justify-content-center " key={i}>

                                    <div className="card my-4 justify" >

                                        <div className="imgCard">

                                            <img src={p.url} alt="" />

                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            {/* <p className="card-text">{posts.filter(p => p.id === 5).map(post => <p> {post.title.slice(0, 18)} </p>)}</p> */}
                                            <p className="card-text">{p.title.slice(0, 5)}..</p>
                                        </div>
                                    </div>



                                </div>



                            )
                        })}

                    <button className='loadMore mt-4' onClick={showMoreItems}>Load More < FaChevronCircleDown />  </button>

                    <button className='loadMore my-4' onClick={showLessItems}>Load Less < FaChevronCircleUp />  </button>


                </div>

            </div>
        </>

    )

}

export default Body