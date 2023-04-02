import Logger from "js-logger";

import { IS_DEVTOOLS } from "@/shared/config";

Logger.useDefaults({
  defaultLevel: !IS_DEVTOOLS ? Logger.WARN : Logger.TRACE,
  formatter: function (messages, context) {
    const d = new Date();
    const time = d.toTimeString().split("")[0] + ":" + d.getMilliseconds();

    messages.unshift(
      `%c${time}%c${context.name ? ` [${context.name}] ` : ""}`,
      "font-style: Italic;",
      "font-size: 1.1em;",
      "font-weight: bold;"
    );
  },
});

export { Logger as logger };
