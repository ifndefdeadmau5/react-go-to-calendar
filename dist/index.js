function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i1 = 0, arr2 = new Array(len); i1 < len; i1++)arr2[i1] = arr[i1];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i1) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i1 && _arr.length === i1) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i1 = 1; i1 < arguments.length; i1++){
        var source = arguments[i1] != null ? arguments[i1] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i1;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i1 = 0; i1 < sourceSymbolKeys.length; i1++){
            key = sourceSymbolKeys[i1];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i1;
    for(i1 = 0; i1 < sourceKeys.length; i1++){
        key = sourceKeys[i1];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray(arr, i1) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i1) || _unsupportedIterableToArray(arr, i1) || _nonIterableRest();
}
function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    Calendar: function() {
        return Calendar_default;
    }
});
module.exports = __toCommonJS(src_exports);
// react-imports.js
var import_react = __toESM(require("react"));
// src/components/Calendar/Calendar.tsx
var import_luxon2 = require("luxon");
// src/components/Calendar/useCalendar.tsx
var import_luxon = require("luxon");
var import_react2 = require("react");
var chunk = function(input, size) {
    return input.reduce(function(arr, item, idx) {
        return idx % size === 0 ? _toConsumableArray(arr).concat([
            [
                item
            ]
        ]) : _toConsumableArray(arr.slice(0, -1)).concat([
            _toConsumableArray(arr.slice(-1)[0]).concat([
                item
            ])
        ]);
    }, []);
};
var useCalendar = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var tmp = options.weeks, numberOfWeeks = tmp === void 0 ? 48 : tmp, tmp1 = options.initialCursor, initialDateCursor = tmp1 === void 0 ? import_luxon.DateTime.now().startOf("week") : tmp1;
    var ref = _slicedToArray((0, import_react2.useState)(initialDateCursor.startOf("week")), 2), cursor = ref[0], setCursor = ref[1];
    var days = (0, import_react2.useMemo)(function() {
        return _toConsumableArray(Array(numberOfWeeks)).reduce(function(acc, _, weekIndex) {
            var startOfWeek = cursor.plus({
                weeks: weekIndex
            });
            var wholeWeek = _toConsumableArray(Array(7)).map(function(_2, dayIndex) {
                return startOfWeek.plus({
                    days: dayIndex
                });
            });
            return _toConsumableArray(acc).concat(_toConsumableArray(wholeWeek));
        }, []);
    }, [
        numberOfWeeks,
        cursor
    ]);
    var dividedByMonth = (0, import_react2.useMemo)(function() {
        return chunk(days, 7).reduce(function(acc, week) {
            var startOfWeek = week[0];
            var shouldCreateNewMonth = startOfWeek.get("day") === 1 || startOfWeek.plus({
                days: 6
            }).get("month") !== startOfWeek.get("month");
            if (shouldCreateNewMonth) {
                return _toConsumableArray(acc).concat([
                    _toConsumableArray(week)
                ]);
            }
            var ref = _toArray([
                acc.pop()
            ].concat(_toConsumableArray(acc))), last = ref[0], rest = ref.slice(1);
            return _toConsumableArray(rest).concat([
                _toConsumableArray(last !== null && last !== void 0 ? last : []).concat(_toConsumableArray(week))
            ]);
        }, []);
    }, [
        days
    ]);
    return [
        {
            days: days,
            months: dividedByMonth
        },
        setCursor
    ];
};
var useCalendar_default = useCalendar;
// src/components/Calendar/CalendarHeader.tsx
var CalendarHeader = function(props) {
    var children = props.children, weekend = props.weekend, others = _objectWithoutProperties(props, [
        "children",
        "weekend"
    ]);
    return /* @__PURE__ */ import_react.default.createElement("div", _objectSpread({
        className: "goto-calendar-header-cell"
    }, others), /* @__PURE__ */ import_react.default.createElement("p", null, children));
};
var CalendarHeader_default = CalendarHeader;
// src/components/Calendar/CalendarContainer.tsx
var import_react3 = require("react");
var CalendarContainer = function(_param, ref) {
    var children = _param.children, others = _objectWithoutProperties(_param, [
        "children"
    ]);
    return /* @__PURE__ */ import_react.default.createElement("div", _objectSpread({
        ref: ref,
        id: "calendar-scroll-container",
        className: "goto-calendar-container"
    }, others), children);
};
var CalendarContainer_default = (0, import_react3.forwardRef)(CalendarContainer);
// src/components/Calendar/CalendarMonth.tsx
var import_react4 = require("react");
var CalendarMonth = function(_param, ref) {
    var children = _param.children, _days = _param.days, days = _days === void 0 ? [] : _days, others = _objectWithoutProperties(_param, [
        "children",
        "days"
    ]);
    return /* @__PURE__ */ import_react.default.createElement("div", _objectSpread({
        ref: ref,
        key: days[0].toFormat("yyyy-MM-dd"),
        className: "goto-calendar-week-grid"
    }, others), children({
        days: days
    }));
};
var CalendarMonth_default = (0, import_react4.forwardRef)(CalendarMonth);
// src/components/Calendar/Calendar.tsx
var CalendarHeaders = function(param) {
    var className = param.className;
    return /* @__PURE__ */ import_react.default.createElement("div", {
        className: "goto-calendar-week-grid goto-calendar-week-header ".concat(className)
    }, /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, null, "Mon"), /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, null, "Tue"), /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, null, "Wed"), /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, null, "Thu"), /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, null, "Fri"), /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, {
        weekend: true
    }, "Sat"), /* @__PURE__ */ import_react.default.createElement(CalendarHeader_default, {
        weekend: true
    }, "Sun"));
};
var Calendar = function(_param) {
    var children = _param.children, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    var ref = _slicedToArray(useCalendar_default({
        initialCursor: import_luxon2.DateTime.now().minus({
            weeks: 12
        }),
        weeks: 24
    }), 2), months = ref[0].months, setCursor = ref[1];
    return /* @__PURE__ */ import_react.default.createElement(CalendarContainer_default, _objectSpread({}, props), /* @__PURE__ */ import_react.default.createElement(CalendarHeaders, null), months.map(function(days) {
        var ref;
        /* @__PURE__ */ return import_react.default.createElement(CalendarMonth_default, {
            key: days === null || days === void 0 ? void 0 : (ref = days[0]) === null || ref === void 0 ? void 0 : ref.toFormat("yyyy-MM-DD"),
            days: days
        }, children);
    }));
};
var Calendar_default = Calendar;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Calendar: Calendar
});
//# sourceMappingURL=index.js.map