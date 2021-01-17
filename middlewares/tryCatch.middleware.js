"use strict";

export async function tryCatch(handlerFunc) {
    return function(req, res, next) {
        try {
            handlerFunc(req, res);
        } catch (err) {
            next(err);
        }
    }
}