const path = require("path");

module.exports = (env) => {
  const isRelease = env === "release";

  return {
    mode: "production",
    devtool: false,
    entry: {
        "forms/LocationInformationForm": "./src/forms/LocationInformationForm"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        library: "WorldBuilder", // Namespace of Libray: Ex) WorldBuilder.<FormScriptClass>.executeOnLoad
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: isRelease ? "production" : "development",
    devtool: isRelease ? false : "inline-source-map",
    }
};
