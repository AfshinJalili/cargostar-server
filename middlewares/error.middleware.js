"use strict";

export function errorHandlerMiddleware(err, req, res) {

    res.status(500).json({error: "something went wrong with the server!"});

    return throw new Error(err.message);
}