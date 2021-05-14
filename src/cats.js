import makeLogger from "./logger";
const logger = makeLogger(module);

const doCatStuff = () => {
  logger.info("meoww");
};

export { doCatStuff };
