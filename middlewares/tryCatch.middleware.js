"use strict";

export function tryCatch(handlerFunc) {
    return (req, res, next) => {
        try {
            handlerFunc(req, res);
        } catch (err) {
            next(err);
        }
    }
}