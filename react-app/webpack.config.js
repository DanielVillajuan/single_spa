const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org1",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig);
};
