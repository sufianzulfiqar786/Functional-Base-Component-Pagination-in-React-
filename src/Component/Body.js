import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../CSS/Body.css"
import ReactPaginate from "react-paginate";
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';


const Body = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 6;
    const [posts, setPosts] = useState([])

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

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;


    const pageCount = Math.ceil(posts.length / PER_PAGE);



    return (


        <>

<div className="fullBody ">

        <div className='row ml-5'>

            {posts.slice(offset, offset + PER_PAGE)

                .map((p) => {
                    return (


                        <div className="col-md-4 d-flex justify-content-center ">

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
</div>

<div className="container">


            <ReactPaginate
                previousLabel={<FaLessThan />}
                nextLabel={<FaGreaterThan/>}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />

</div>
        
</div>
        </>

    )

}

export default Body
