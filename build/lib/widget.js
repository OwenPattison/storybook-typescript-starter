"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SampleWidget = /** @class */ (function (_super) {
    __extends(SampleWidget, _super);
    function SampleWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleWidget.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null,
                "Hello ",
                this.props.name,
                " ",
                this.props.age));
    };
    return SampleWidget;
}(React.Component));
exports.SampleWidget = SampleWidget;
//# sourceMappingURL=widget.js.map