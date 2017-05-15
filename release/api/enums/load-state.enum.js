export var ApiLoadState;
(function (ApiLoadState) {
    ApiLoadState[ApiLoadState["idle"] = -1] = "idle";
    ApiLoadState[ApiLoadState["loading"] = 0] = "loading";
    ApiLoadState[ApiLoadState["loaded"] = 1] = "loaded";
    ApiLoadState[ApiLoadState["error"] = 2] = "error";
})(ApiLoadState || (ApiLoadState = {}));
//# sourceMappingURL=load-state.enum.js.map