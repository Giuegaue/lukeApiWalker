import React from "react";

const Error = (props) => {

    const image = require('./obi-wan.jpg');

    return (
        <div>
            <hr />
            <img src={image} alt="obi-wan" />
            <h1>These aren't the droids you're looking for</h1>
        </div>
    );
}

export default Error;