module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-case": [0, "always", "start-case"],
    "type-enum": [2, "always", ["Build", "Chore", "Ci", "Docs", "Feat", "Fix", "Perf", "Refactor", "Revert", "Style", "Test"]],
    "subject-case": [0, "always", "start-case"]
  }
}
