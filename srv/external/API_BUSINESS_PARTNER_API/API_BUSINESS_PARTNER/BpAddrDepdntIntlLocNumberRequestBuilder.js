"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpAddrDepdntIntlLocNumberRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpAddrDepdntIntlLocNumber_1 = require("./BpAddrDepdntIntlLocNumber");
/**
 * Request builder class for operations supported on the {@link BpAddrDepdntIntlLocNumber} entity.
 */
class BpAddrDepdntIntlLocNumberRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpAddrDepdntIntlLocNumber` entity based on its keys.
     * @param businessPartner Key property. See {@link BpAddrDepdntIntlLocNumber.businessPartner}.
     * @param addressId Key property. See {@link BpAddrDepdntIntlLocNumber.addressId}.
     * @returns A request builder for creating requests to retrieve one `BpAddrDepdntIntlLocNumber` entity based on its keys.
     */
    getByKey(businessPartner, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            AddressID: addressId
        });
    }
    /**
     * Returns a request builder for querying all `BpAddrDepdntIntlLocNumber` entities.
     * @returns A request builder for creating requests to retrieve all `BpAddrDepdntIntlLocNumber` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpAddrDepdntIntlLocNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpAddrDepdntIntlLocNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessPartnerOrEntity, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId
            });
    }
}
exports.BpAddrDepdntIntlLocNumberRequestBuilder = BpAddrDepdntIntlLocNumberRequestBuilder;
//# sourceMappingURL=BpAddrDepdntIntlLocNumberRequestBuilder.js.map