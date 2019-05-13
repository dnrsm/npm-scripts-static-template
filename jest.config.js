module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  transformIgnorePatterns: ["/node_modules/(?!@babel/runtime-corejs2)"],
  testMatch: ["**/test/**/*.+(ts|tsx|js)"]
}
