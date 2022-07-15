"use strict";
var common_vendor = require("../common/vendor.js");
var utils_token = require("../utils/token.js");
const useUserStore = common_vendor.defineStore("storeUser", {
  state: () => {
    return {
      firstName: "John",
      lastName: "Smith",
      accesstoken: "xxxxxxx",
      user: {}
    };
  },
  actions: {
    setToken(value) {
      this.accesstoken = value;
      utils_token.setToken(value);
    },
    async login(email, password) {
      const graphqlQuery = {
        query: `
                    query UserLogin($email:String!,$password:String!) {
                        login(email: $email, password: $password) {
                            token
                            userId
                        }
                        }
                    `,
        variables: {
          email,
          password
        }
      };
      const { execute } = common_vendor.useQuery(graphqlQuery);
      const {
        data: {
          login: { token }
        }
      } = await execute();
      this.setToken(token);
    },
    async getUserInfo() {
      const graphqlQuery = {
        query: `
                {
                    user{
                        status
                    }
                }
                `
      };
      const { data: results, execute } = common_vendor.useQuery(graphqlQuery);
      this.user = results;
    }
  }
});
exports.useUserStore = useUserStore;
