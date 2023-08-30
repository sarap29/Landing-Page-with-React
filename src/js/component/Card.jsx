import React from "react";


const Card = () => {
    return (
        
        <div className="container d-flex">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                <img src="https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button type="button" className="btn btn-verde">Saber más</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button type="button" className="btn btn-verde">Saber más</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button type="button" className="btn btn-verde">Saber más</button>
                </div>
                </div>
            </div>
            </div>
            </div>
           


    );
};

export default Card;