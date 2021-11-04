import React, { Component } from 'react'

export default class FoodBox extends Component {
    state = {
        quantity: 1
    };

    handleClick = (evt) => {
        let currentQuantity = evt.target.value >= 0 ? evt.target.value : 0
        this.setState({
            quantity: currentQuantity
        })
    }

    render () {  
        return (<div className="box" key={this.props.food.name}>
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.props.food.name}</strong> <br />
                            <small>{this.props.food.calories} cal</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" value={this.state.quantity} onChange={this.handleClick}/>
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={(evt) => this.props.handleToday(this.state.quantity, this.props.food)}>
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
        </div>
    )
    }
}
