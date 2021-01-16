"use strict";

import app from "./configurations/app.js";
import logger from "./configurations/logger.js";
import environment from "./configurations/environment.js";




app.listen(environment.port, () => logger.info(`server listening on port: ${environment.port}`));
