import log from "loglevelnext";

const loggingLevel = 1;

const options = {
  level: (opts) => `[${opts.level.toUpperCase()}]`,
  template: "{{level}} ({{name}}) ",
  time: () => `[${new Date().toTimeString().split(" ")[0].split(":")[0]}]`
};
// const customPrefix = new log.factories.PrefixFactory(log, options);

const makeLogger = (moduleRef) => {
  const logger = log.create({
    name: moduleRef.id,
    level: loggingLevel,
    prefix: options
  });
  // logger.factory = customPrefix;
  // logger.level = loggingLevel;

  console.log({ logger });

  // const logger = new LogLevel({
  //   name: moduleRef.id,
  //   level: loggingLevel,
  // });

  return logger;
};

export default makeLogger;
