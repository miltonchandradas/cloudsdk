const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

module.exports = async (srv) => {
  srv.on("getNorthwindProducts", async (req) => {
    try {
      let response = await executeHttpRequest(
        {
          url: "https://services.odata.org/V2/(S(wd5zwkiarvfvgybus0l5a3xe))/OData/OData.svc",
          // destinationName: "northwind",
        },
        {
          method: "get",
          url: "/Products",
        }
      );

      let data = response.data.d.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  });
};
