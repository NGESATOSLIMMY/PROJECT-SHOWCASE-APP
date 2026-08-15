module.exports = {
  presets: [
    ["@babel/present-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
