import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/'>
                            <button
                                type='button'
                                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                                onClick={() => clearCart()}
                            >
                                limpar carrinho
                            </button>
                        </Link>
                        <h5 className='text-title'>
                            subtotal: <strong>R$ {cartSubTotal},00 </strong>{' '}
                        </h5>
                        <h5 className='text-title'>
                            taxa: <strong>R$ {cartTax} </strong>{' '}
                        </h5>
                        <h5 className='text-title'>
                            total: <strong>R$ {cartTotal} </strong>{' '}
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
