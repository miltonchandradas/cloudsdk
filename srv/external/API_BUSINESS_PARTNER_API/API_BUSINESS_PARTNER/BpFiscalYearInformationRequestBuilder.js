"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFiscalYearInformationRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpFiscalYearInformation_1 = require("./BpFiscalYearInformation");
/**
 * Request builder class for operations supported on the {@link BpFiscalYearInformation} entity.
 */
class BpFiscalYearInformationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpFiscalYearInformation` entity based on its keys.
     * @param businessPartner Key property. See {@link BpFiscalYearInformation.businessPartner}.
     * @param businessPartnerFiscalYear Key property. See {@link BpFiscalYearInformation.businessPartnerFiscalYear}.
     * @returns A request builder for creating requests to retrieve one `BpFiscalYearInformation` entity based on its keys.
     */
    getByKey(businessPartner, businessPartnerFiscalYear) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BusinessPartnerFiscalYear: businessPartnerFiscalYear
        });
    }
    /**
     * Returns a request builder for querying all `BpFiscalYearInformation` entities.
     * @returns A request builder for creating requests to retrieve all `BpFiscalYearInformation` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpFiscalYearInformation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpFiscalYearInformation`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpFiscalYearInformation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpFiscalYearInformation`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessPartnerOrEntity, businessPartnerFiscalYear) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BpFiscalYearInformation_1.BpFiscalYearInformation
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BusinessPartnerFiscalYear: businessPartnerFiscalYear
            });
    }
}
exports.BpFiscalYearInformationRequestBuilder = BpFiscalYearInformationRequestBuilder;
//# sourceMappingURL=BpFiscalYearInformationRequestBuilder.js.map