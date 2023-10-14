"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusPartAddrDepdntTaxNmbrApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusPartAddrDepdntTaxNmbr_1 = require("./BusPartAddrDepdntTaxNmbr");
const BusPartAddrDepdntTaxNmbrRequestBuilder_1 = require("./BusPartAddrDepdntTaxNmbrRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusPartAddrDepdntTaxNmbrApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusPartAddrDepdntTaxNmbrApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusPartAddrDepdntTaxNmbrRequestBuilder_1.BusPartAddrDepdntTaxNmbrRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr, this.deSerializers);
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
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                /**
                 * Static representation of the {@link bpTaxType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_TAX_TYPE: fieldBuilder.buildEdmTypeField('BPTaxType', 'Edm.String', false),
                /**
                 * Static representation of the {@link bpTaxNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_TAX_NUMBER: fieldBuilder.buildEdmTypeField('BPTaxNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpTaxLongNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_TAX_LONG_NUMBER: fieldBuilder.buildEdmTypeField('BPTaxLongNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr)
            };
        }
        return this._schema;
    }
}
exports.BusPartAddrDepdntTaxNmbrApi = BusPartAddrDepdntTaxNmbrApi;
//# sourceMappingURL=BusPartAddrDepdntTaxNmbrApi.js.map