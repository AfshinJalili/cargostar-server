"use strict";

import app from "./initials/app.js";
import logger from "./initials/logger.js";


const port = 3000;

app.listen(port, () => logger.info(`server listening on port: ${port}`));
