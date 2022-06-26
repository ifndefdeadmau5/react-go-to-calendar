var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  findStartOfMonth: () => findStartOfMonth
});
module.exports = __toCommonJS(utils_exports);
var findStartOfMonth = ({
  date,
  range
}) => {
  const wholeWeek = [...new Array(range)].map((_, i) => date.plus({ days: i }));
  return wholeWeek.find((v) => v.get("day") === 1);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findStartOfMonth
});
//# sourceMappingURL=index.js.map