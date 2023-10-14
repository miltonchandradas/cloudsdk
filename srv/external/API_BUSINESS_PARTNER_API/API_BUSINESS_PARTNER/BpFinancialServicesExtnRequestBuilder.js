"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesExtnRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link BpFinancialServicesExtn} entity.
 */
class BpFinancialServicesExtnRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpFinancialServicesExtn` entity based on its keys.
     * @param businessPartner Key property. See {@link BpFinancialServicesExtn.businessPartner}.
     * @returns A request builder for creating requests to retrieve one `BpFinancialServicesExtn` entity based on its keys.
     */
    getByKey(businessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { BusinessPartner: businessPartner });
    }
    /**
     * Returns a request builder for querying all `BpFinancialServicesExtn` entities.
     * @returns A request builder for creating requests to retrieve all `BpFinancialServicesExtn` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpFinancialServicesExtn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpFinancialServicesExtn`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpFinancialServicesExtn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpFinancialServicesExtn`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.BpFinancialServicesExtnRequestBuilder = BpFinancialServicesExtnRequestBuilder;
//# sourceMappingURL=BpFinancialServicesExtnRequestBuilder.js.map