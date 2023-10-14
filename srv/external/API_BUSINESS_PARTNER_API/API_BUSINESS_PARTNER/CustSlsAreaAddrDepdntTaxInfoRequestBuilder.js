"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntTaxInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustSlsAreaAddrDepdntTaxInfo_1 = require("./CustSlsAreaAddrDepdntTaxInfo");
/**
 * Request builder class for operations supported on the {@link CustSlsAreaAddrDepdntTaxInfo} entity.
 */
class CustSlsAreaAddrDepdntTaxInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntTaxInfo` entity based on its keys.
     * @param customer Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.customer}.
     * @param salesOrganization Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.salesOrganization}.
     * @param distributionChannel Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.distributionChannel}.
     * @param division Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.division}.
     * @param addressId Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.addressId}.
     * @param departureCountry Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.departureCountry}.
     * @param customerTaxCategory Key property. See {@link CustSlsAreaAddrDepdntTaxInfo.customerTaxCategory}.
     * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntTaxInfo` entity based on its keys.
     */
    getByKey(customer, salesOrganization, distributionChannel, division, addressId, departureCountry, customerTaxCategory) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId,
            DepartureCountry: departureCountry,
            CustomerTaxCategory: customerTaxCategory
        });
    }
    /**
     * Returns a request builder for querying all `CustSlsAreaAddrDepdntTaxInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntTaxInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustSlsAreaAddrDepdntTaxInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerOrEntity, salesOrganization, distributionChannel, division, addressId, departureCountry, customerTaxCategory) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                SalesOrganization: salesOrganization,
                DistributionChannel: distributionChannel,
                Division: division,
                AddressID: addressId,
                DepartureCountry: departureCountry,
                CustomerTaxCategory: customerTaxCategory
            });
    }
}
exports.CustSlsAreaAddrDepdntTaxInfoRequestBuilder = CustSlsAreaAddrDepdntTaxInfoRequestBuilder;
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfoRequestBuilder.js.map