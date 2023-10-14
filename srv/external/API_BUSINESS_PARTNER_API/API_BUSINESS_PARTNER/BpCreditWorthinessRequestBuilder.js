"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpCreditWorthinessRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link BpCreditWorthiness} entity.
 */
class BpCreditWorthinessRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpCreditWorthiness` entity based on its keys.
     * @param businessPartner Key property. See {@link BpCreditWorthiness.businessPartner}.
     * @returns A request builder for creating requests to retrieve one `BpCreditWorthiness` entity based on its keys.
     */
    getByKey(businessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { BusinessPartner: businessPartner });
    }
    /**
     * Returns a request builder for querying all `BpCreditWorthiness` entities.
     * @returns A request builder for creating requests to retrieve all `BpCreditWorthiness` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpCreditWorthiness` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpCreditWorthiness`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpCreditWorthiness`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpCreditWorthiness`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.BpCreditWorthinessRequestBuilder = BpCreditWorthinessRequestBuilder;
//# sourceMappingURL=BpCreditWorthinessRequestBuilder.js.map