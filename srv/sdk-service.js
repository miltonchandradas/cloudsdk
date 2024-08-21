const cds = require("@sap/cds");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
const {
  apiBusinessPartner,
} = require("./external/API_BUSINESS_PARTNER_API/API_BUSINESS_PARTNER/service.js");
const {
  batch,
  changeset,
} = require("./external/API_BUSINESS_PARTNER_API/API_BUSINESS_PARTNER/BatchRequest.js");
const { sendMail } = require("@sap-cloud-sdk/mail-client");

module.exports = async (srv) => {
  const { BusinessPartners } = srv.entities;

  // connect to remote service
  const S4HANAService = await cds.connect.to("API_BUSINESS_PARTNER");
  const NORTHWINDService = await cds.connect.to("Northwind");

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

    // Using SAP Cloud SDK - Typically you would not use this.  You would use the CAP CDS Query Language instead (See above)
    // const { businessPartnerApi } = apiBusinessPartner();
    // let businessPartners = await businessPartnerApi
    //   .requestBuilder()
    //   .getAll()
    //   .select(
    //     businessPartnerApi.schema.BUSINESS_PARTNER,
    //     businessPartnerApi.schema.FIRST_NAME,
    //     businessPartnerApi.schema.LAST_NAME
    //   )
    //   .filter(
    //     businessPartnerApi.schema.FIRST_NAME.notEquals(""),
    //     businessPartnerApi.schema.LAST_NAME.notEquals("")
    //   )
    //   .top(10)
    //   .addCustomHeaders({
    //     apikey: process.env.apikey,
    //   })
    //   .execute({
    //     // url: "https://sandbox.api.sap.com/s4hanacloud",
    //     destinationName: "s4hana-cloud-extensibility",
    //   });

    // businessPartners.forEach((bp) => {
    //   (bp.BusinessPartner = bp.businessPartner),
    //     (bp.FirstName = bp.firstName),
    //     (bp.LastName = bp.lastName);
    // });

    // return businessPartners;
  });

  srv.on("batchOperationsCAP", async (req) => {
    return await NORTHWINDService.send({
      method: "POST",
      path: "$batch",
      headers: {
        "Accept": "multipart/mixed",
        "Content-Type": "multipart/mixed;boundary=batch_abcd",
      },
      data: 
      "--batch_abcd\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nGET Products?$format=json HTTP/1.1\r\n\r\n--batch_abcd--"
    });
  });

  srv.on("batchOperationsBP", async (req) => {
    const { businessPartnerApi, businessPartnerAddressApi } =
      apiBusinessPartner();
    let read1 = businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY
      )
      .top(10)
      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals("1"));
    let read2 = businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME
      )
      .top(10)
      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals("2"));

    const address1 = businessPartnerAddressApi.entityBuilder().fromJson({
      businessPartner: "1000060",
      cityName: "Palo Alto",
      houseNumber: "3410",
      postalCode: "94304",
      streetName: "Hillview Avenue",
      country: "US",
    });
    let create1 = businessPartnerAddressApi.requestBuilder().create(address1);

    let createRequests = []

    createRequests.push(create1)

    try {
      let partners = await batch(changeset(...createRequests), read1, read2)
        .addCustomHeaders({
          apikey: process.env.apikey,
        })
        .execute({
          // url: "https://sandbox.api.sap.com/s4hanacloud",
          destinationName: "s4hana-cloud-extensibility",
        });

      return "OK";
    } catch (error) {
      console.log(error.cause.cause.response.data.message);
      return "Batch request failed...";
    }
  });

  // srv.on("sendMail", async (req) => {
  //   const mailConfig = {
  //     from: "matt.jacobs33@ethereal.email",
  //     to: "milton.chandradas@gmail.com",
  //     text: "Message body...",
  //     subject: "Message subject...",
  //   };

  //   try {
  //     sendMail({ destinationName: "google_smtp" }, [mailConfig], {
  //       connectionTimeout: 120000,
  //       greetingTimeout: 120000,
  //       secure: false,
  //       ignoreTLS: true,
  //       debug: true,
  //       tls: {
  //         rejectUnauthorized: false,
  //       },
  //     });
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }

  //   return "OK";
  // });

  srv.on("sendMail", async (req) => {
    const mailConfig = {
      from: "matt.jacobs33@ethereal.email",
      to: "milton.chandradas@gmail.com",
      text: "Message body...",
      subject: "Message subject...",
    };

    try {
      await sendMail({ destinationName: "google_smtp" }, [mailConfig], {
        greetingTimeout: 30000,
      });
      console.log("After await...");
    } catch (error) {
      console.log("ERROR: ", error);
      // Do whatever here...
      return "NOT OK";
    }

    return "OK";
  });
};
