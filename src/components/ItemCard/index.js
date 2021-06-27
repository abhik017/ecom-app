import React from 'react';
import './style.scss';
class ItemCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="card" className="item-card">
                <div class="view text-center">
                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample"/>
                    <h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
                </div>
                <div class="card-body text-center">
                    <h5>Fantasy T-shirt</h5>
                    <p class="small text-muted text-uppercase mb-2">Description</p>
                    <hr/>
                    <h6 class="mb-3">
                    <span class="text-danger mr-1">INR 350</span>
                    </h6>
                    <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
                    <i class="fas fa-shopping-cart pr-2"></i>Buy Now
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemCard;