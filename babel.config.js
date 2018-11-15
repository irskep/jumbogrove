module.exports = {
  presets: [
    '@vue/app',
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": ["transform-runtime"],
  "env": {
    "test": {
      "presets": ["env", "stage-2"]    }
  }
}
