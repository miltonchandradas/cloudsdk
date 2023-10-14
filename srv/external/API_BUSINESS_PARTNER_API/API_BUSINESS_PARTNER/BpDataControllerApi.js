"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpDataControllerApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpDataController_1 = require("./BpDataController");
const BpDataControllerRequestBuilder_1 = require("./BpDataControllerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpDataControllerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpDataController_1.BpDataController;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpDataControllerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpDataControllerRequestBuilder_1.BpDataControllerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpDataController_1.BpDataController, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link businessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                /**
                 * Static representation of the {@link dataController} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATA_CONTROLLER: fieldBuilder.buildEdmTypeField('DataController', 'Edm.String', false),
                /**
                 * Static representation of the {@link purposeForPersonalData} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURPOSE_FOR_PERSONAL_DATA: fieldBuilder.buildEdmTypeField('PurposeForPersonalData', 'Edm.String', false),
                /**
                 * Static representation of the {@link dataControlAssignmentStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATA_CONTROL_ASSIGNMENT_STATUS: fieldBuilder.buildEdmTypeField('DataControlAssignmentStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpDataControllerIsDerived} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_DATA_CONTROLLER_IS_DERIVED: fieldBuilder.buildEdmTypeField('BPDataControllerIsDerived', 'Edm.String', true),
                /**
                 * Static representation of the {@link purposeDerived} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURPOSE_DERIVED: fieldBuilder.buildEdmTypeField('PurposeDerived', 'Edm.String', true),
                /**
                 * Static representation of the {@link purposeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURPOSE_TYPE: fieldBuilder.buildEdmTypeField('PurposeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPurposeFlag} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PURPOSE_FLAG: fieldBuilder.buildEdmTypeField('BusinessPurposeFlag', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpDataController_1.BpDataController)
            };
        }
        return this._schema;
    }
}
exports.BpDataControllerApi = BpDataControllerApi;
//# sourceMappingURL=BpDataControllerApi.js.map