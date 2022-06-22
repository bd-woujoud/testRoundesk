
import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';
import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

   const [article,setArticle]=useState(articles)

useEffect(()=>{

    article.sort(function (a, b) {console.log(article,"article");
    
    return a.upvotes - b.upvotes;

  }); 

},[]);

const handleUpvoted = () => {

article.sort(function (a, b) {console.log(article,"croissant");
            return a.upvotes - b.upvotes;
          });
          
          setArticle(article)
    
     }

const handleRecent = () => {console.log(article,"date");

    article.sort(
        (a, b) =>new Date(b.date) - new Date(a.date)
 );
 setArticle(article)
}
    return (

        <div className="App">

            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button className="small" onClick={handleUpvoted}>Most Upvoted</button>
                <button className="small" onClick={handleRecent}>Most Recent</button>
            </div>

            <Articles/>

            <div className="card w-50 mx-auto">
            <table className="table center" >
                                                <thead style={{ color: 'black', fontsize:"25px"}} >
                                                    <tr>
                                                        <th>titre</th>
                                                        <th>upvotes</th>
                                                        <th>date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                     article.map((e, i) => {
                                                            
                                                            return (
                                                                <tr>
                                                                    <td> {e.title} </td>
                                                                    <td > {e.upvotes} </td>
                                                                    <td> {e.date} </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            </div>
        </div>
    );

}

export default App;
