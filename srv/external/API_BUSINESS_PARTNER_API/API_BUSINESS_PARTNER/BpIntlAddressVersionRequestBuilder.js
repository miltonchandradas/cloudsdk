"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpIntlAddressVersionRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpIntlAddressVersion_1 = require("./BpIntlAddressVersion");
/**
 * Request builder class for operations supported on the {@link BpIntlAddressVersion} entity.
 */
class BpIntlAddressVersionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpIntlAddressVersion` entity based on its keys.
     * @param businessPartner Key property. See {@link BpIntlAddressVersion.businessPartner}.
     * @param addressId Key property. See {@link BpIntlAddressVersion.addressId}.
     * @param addressRepresentationCode Key property. See {@link BpIntlAddressVersion.addressRepresentationCode}.
     * @returns A request builder for creating requests to retrieve one `BpIntlAddressVersion` entity based on its keys.
     */
    getByKey(businessPartner, addressId, addressRepresentationCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            AddressID: addressId,
            AddressRepresentationCode: addressRepresentationCode
        });
    }
    /**
     * Returns a request builder for querying all `BpIntlAddressVersion` entities.
     * @returns A request builder for creating requests to retrieve all `BpIntlAddressVersion` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpIntlAddressVersion` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpIntlAddressVersion`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpIntlAddressVersion`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpIntlAddressVersion`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessPartnerOrEntity, addressId, addressRepresentationCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BpIntlAddressVersion_1.BpIntlAddressVersion
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId,
                AddressRepresentationCode: addressRepresentationCode
            });
    }
}
exports.BpIntlAddressVersionRequestBuilder = BpIntlAddressVersionRequestBuilder;
//# sourceMappingURL=BpIntlAddressVersionRequestBuilder.js.map