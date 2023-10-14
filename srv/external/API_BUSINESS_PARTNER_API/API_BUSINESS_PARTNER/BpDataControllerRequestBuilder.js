"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpDataControllerRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link BpDataController} entity.
 */
class BpDataControllerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpDataController` entity based on its keys.
     * @param businessPartner Key property. See {@link BpDataController.businessPartner}.
     * @param dataController Key property. See {@link BpDataController.dataController}.
     * @param purposeForPersonalData Key property. See {@link BpDataController.purposeForPersonalData}.
     * @returns A request builder for creating requests to retrieve one `BpDataController` entity based on its keys.
     */
    getByKey(businessPartner, dataController, purposeForPersonalData) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            DataController: dataController,
            PurposeForPersonalData: purposeForPersonalData
        });
    }
    /**
     * Returns a request builder for querying all `BpDataController` entities.
     * @returns A request builder for creating requests to retrieve all `BpDataController` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpDataController` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpDataController`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpDataController`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpDataController`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.BpDataControllerRequestBuilder = BpDataControllerRequestBuilder;
//# sourceMappingURL=BpDataControllerRequestBuilder.js.map