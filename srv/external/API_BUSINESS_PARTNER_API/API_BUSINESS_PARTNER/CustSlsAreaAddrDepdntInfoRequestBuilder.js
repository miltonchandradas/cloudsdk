"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustSlsAreaAddrDepdntInfo_1 = require("./CustSlsAreaAddrDepdntInfo");
/**
 * Request builder class for operations supported on the {@link CustSlsAreaAddrDepdntInfo} entity.
 */
class CustSlsAreaAddrDepdntInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
     * @param customer Key property. See {@link CustSlsAreaAddrDepdntInfo.customer}.
     * @param salesOrganization Key property. See {@link CustSlsAreaAddrDepdntInfo.salesOrganization}.
     * @param distributionChannel Key property. See {@link CustSlsAreaAddrDepdntInfo.distributionChannel}.
     * @param division Key property. See {@link CustSlsAreaAddrDepdntInfo.division}.
     * @param addressId Key property. See {@link CustSlsAreaAddrDepdntInfo.addressId}.
     * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
     */
    getByKey(customer, salesOrganization, distributionChannel, division, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId
        });
    }
    /**
     * Returns a request builder for querying all `CustSlsAreaAddrDepdntInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustSlsAreaAddrDepdntInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerOrEntity, salesOrganization, distributionChannel, division, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                SalesOrganization: salesOrganization,
                DistributionChannel: distributionChannel,
                Division: division,
                AddressID: addressId
            });
    }
}
exports.CustSlsAreaAddrDepdntInfoRequestBuilder = CustSlsAreaAddrDepdntInfoRequestBuilder;
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoRequestBuilder.js.map