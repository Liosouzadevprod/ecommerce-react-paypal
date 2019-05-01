import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className='img-fluid'
                    alt='produto'
                />
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>produto: </span>
                {title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>preço: </span>
                R$ {price},00
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <button
                            type='button'
                            className='btn btn-outline-secondary mx-1'
                            onClick={() => decrement(id)}
                        >
                            -
                        </button>
                        <button
                            type='button'
                            className='btn btn-outline-secondary mx-1'
                        >
                            {count}
                        </button>
                        <button
                            type='button'
                            className='btn btn-outline-secondary mx-1'
                            onClick={() => increment(id)}
                        >
                            +
                        </button>
                        {/* <span
                            className='btn btn-black mx-1'
                            onClick={() => decrement(id)}
                        >
                            -
                        </span> */}
                    </div>
                </div>
            </div>
            {/* */}
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={() => removeItem(id)}>
                    <i className='fas fa-trash' />
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <strong>total itens: R$ {total}</strong>,00
            </div>
        </div>
    );
}
