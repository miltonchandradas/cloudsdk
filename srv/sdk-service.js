const cds = require("@sap/cds");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

module.exports = async (srv) => {
  const { BusinessPartners } = srv.entities;

  // connect to remote service
  const S4HANAService = await cds.connect.to("API_BUSINESS_PARTNER");

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

  srv.on("addNorthwindProduct", async (req) => {
    let { ID, Name, Description, Rating, Price } = req.data;
    try {
      let response = await executeHttpRequest(
        {
          url: "https://services.odata.org/V2/(S(wd5zwkiarvfvgybus0l5a3xe))/OData/OData.svc",
          // destinationName: "northwind",
        },
        {
          method: "post",
          url: "/Products",
          data: { ID, Name, Description, Rating, Price },
        }
      );

      let data = response.data.d;
      return data;
    } catch (error) {
      console.log(error);
    }
  });

  srv.on("READ", BusinessPartners, async (req) => {

    // Using CAP CDS Query Language - Recommended approach
    return await S4HANAService.send({
      query: SELECT(BusinessPartners)
        .where({
          FirstName: { "<>": "" },
          LastName: { "<>": "" },
        })
        .columns(["BusinessPartner", "FirstName", "LastName"])
        .limit(10),
      headers: {
        apikey: process.env.apikey,
      },
    });
  });
};
