"use strict";
var common_vendor = require("../common/vendor.js");
const TOKEN_NAME = "token";
const getToken = () => {
  return common_vendor.index.getStorageSync(TOKEN_NAME);
};
const setToken = (token) => {
  return common_vendor.index.setStorageSync(TOKEN_NAME, token);
};
exports.getToken = getToken;
exports.setToken = setToken;
