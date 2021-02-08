const { default: Bot } = require("el-bot");
/**
 *
 * @param {Bot} ctx
 */
module.exports = (ctx, options) => {
  const {
    mirai,
    logger,
    el: { config },
  } = ctx;

  mirai.on("message", (msg) => {
    console.log("msg", msg, options, config);
    logger.success("人类的伟大就是勇气的伟大");
    msg.reply(
      "我是一个无情的自定义测试插件，可以到 el/index.yml plugins.custom 处关闭我。"
    );
  });
};
