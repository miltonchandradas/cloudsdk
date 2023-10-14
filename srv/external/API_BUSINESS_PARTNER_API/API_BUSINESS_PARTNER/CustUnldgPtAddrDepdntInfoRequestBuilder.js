"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustUnldgPtAddrDepdntInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustUnldgPtAddrDepdntInfo_1 = require("./CustUnldgPtAddrDepdntInfo");
/**
 * Request builder class for operations supported on the {@link CustUnldgPtAddrDepdntInfo} entity.
 */
class CustUnldgPtAddrDepdntInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
     * @param customer Key property. See {@link CustUnldgPtAddrDepdntInfo.customer}.
     * @param addressId Key property. See {@link CustUnldgPtAddrDepdntInfo.addressId}.
     * @param unloadingPointName Key property. See {@link CustUnldgPtAddrDepdntInfo.unloadingPointName}.
     * @returns A request builder for creating requests to retrieve one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
     */
    getByKey(customer, addressId, unloadingPointName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            AddressID: addressId,
            UnloadingPointName: unloadingPointName
        });
    }
    /**
     * Returns a request builder for querying all `CustUnldgPtAddrDepdntInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustUnldgPtAddrDepdntInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustUnldgPtAddrDepdntInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustUnldgPtAddrDepdntInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CustUnldgPtAddrDepdntInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustUnldgPtAddrDepdntInfo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerOrEntity, addressId, unloadingPointName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                AddressID: addressId,
                UnloadingPointName: unloadingPointName
            });
    }
}
exports.CustUnldgPtAddrDepdntInfoRequestBuilder = CustUnldgPtAddrDepdntInfoRequestBuilder;
//# sourceMappingURL=CustUnldgPtAddrDepdntInfoRequestBuilder.js.map