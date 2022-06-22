import React from 'react';

function Articles({articles}) {




    return (

        <div className="card w-50 mx-auto">
            <h2 style={{textAlign:'center'}}>All Articles </h2>

{/* <table className="table" >
                                                <thead style={{ color: 'black', fontsize:"25px"}} >
                                                    <tr>
                                                    
                                                        <th>titre</th>
                                                        <th>upvotes</th>
                                                        <th>date</th>
                                                      
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        articles.map((e, i) => { 
                                                            
                                                            return (
                                                                <tr>
                                                                    <td> {e.title} </td>
                                                                    <td> {e.upvotes} </td>
                                                                    <td> {e.date} </td>
                                                                   
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table> */}
        </div>
    );

}

export default Articles;
