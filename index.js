"use strict";

import app from "./configurations/app.js";
import logger from "./configurations/logger.js";
import environment from "./configurations/environment.js";
import {connectToDatabase} from "./configurations/db.js";
import {registerError} from "./helpers/errorHandler.js";

registerError();

connectToDatabase();


app.listen(environment.port, () => logger.info(`server listening on port: ${environment.port}`));
