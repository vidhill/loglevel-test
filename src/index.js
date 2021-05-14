import makeLogger from "./logger";
import { doCatStuff } from "./cats";
const logger = makeLogger(module);

doCatStuff();

logger.debug("fod");
logger.info("foo");
logger.warn("foom");
logger.error("foopc ");
