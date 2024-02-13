
//this component for mapping data
import React from 'react';
import Card from './Card';

const CardRender = ({ count, setCount, setProducts, Products }) => {

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 justify-content-center">
                        {Products.map((item, index) => {
                            return (
                                <>
                                    <Card item={item} index={index} setCount={setCount} count={count} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </section >
        </div >

    );
};

export default CardRender;