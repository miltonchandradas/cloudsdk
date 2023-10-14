"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusPartAddrDepdntTaxNmbrRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusPartAddrDepdntTaxNmbr_1 = require("./BusPartAddrDepdntTaxNmbr");
/**
 * Request builder class for operations supported on the {@link BusPartAddrDepdntTaxNmbr} entity.
 */
class BusPartAddrDepdntTaxNmbrRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
     * @param businessPartner Key property. See {@link BusPartAddrDepdntTaxNmbr.businessPartner}.
     * @param addressId Key property. See {@link BusPartAddrDepdntTaxNmbr.addressId}.
     * @param bpTaxType Key property. See {@link BusPartAddrDepdntTaxNmbr.bpTaxType}.
     * @returns A request builder for creating requests to retrieve one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
     */
    getByKey(businessPartner, addressId, bpTaxType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            AddressID: addressId,
            BPTaxType: bpTaxType
        });
    }
    /**
     * Returns a request builder for querying all `BusPartAddrDepdntTaxNmbr` entities.
     * @returns A request builder for creating requests to retrieve all `BusPartAddrDepdntTaxNmbr` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusPartAddrDepdntTaxNmbr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusPartAddrDepdntTaxNmbr`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BusPartAddrDepdntTaxNmbr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusPartAddrDepdntTaxNmbr`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessPartnerOrEntity, addressId, bpTaxType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId,
                BPTaxType: bpTaxType
            });
    }
}
exports.BusPartAddrDepdntTaxNmbrRequestBuilder = BusPartAddrDepdntTaxNmbrRequestBuilder;
//# sourceMappingURL=BusPartAddrDepdntTaxNmbrRequestBuilder.js.map