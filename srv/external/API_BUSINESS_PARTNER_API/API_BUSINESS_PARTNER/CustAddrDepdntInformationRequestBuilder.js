"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntInformationRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustAddrDepdntInformation_1 = require("./CustAddrDepdntInformation");
/**
 * Request builder class for operations supported on the {@link CustAddrDepdntInformation} entity.
 */
class CustAddrDepdntInformationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CustAddrDepdntInformation` entity based on its keys.
     * @param customer Key property. See {@link CustAddrDepdntInformation.customer}.
     * @param addressId Key property. See {@link CustAddrDepdntInformation.addressId}.
     * @returns A request builder for creating requests to retrieve one `CustAddrDepdntInformation` entity based on its keys.
     */
    getByKey(customer, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            AddressID: addressId
        });
    }
    /**
     * Returns a request builder for querying all `CustAddrDepdntInformation` entities.
     * @returns A request builder for creating requests to retrieve all `CustAddrDepdntInformation` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustAddrDepdntInformation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntInformation`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CustAddrDepdntInformation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntInformation`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerOrEntity, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustAddrDepdntInformation_1.CustAddrDepdntInformation
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                AddressID: addressId
            });
    }
}
exports.CustAddrDepdntInformationRequestBuilder = CustAddrDepdntInformationRequestBuilder;
//# sourceMappingURL=CustAddrDepdntInformationRequestBuilder.js.map