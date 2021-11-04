import React, { Component } from "react";

export default function SearchBar (props) {

    return (
        <p className="control is-expanded">
            <input className="input" type="text" id="searched" placeholder="Search a food" onChange={(evt) => props.handleSearch(evt.target.value)}>
            </input>
        </p>
        )
}
