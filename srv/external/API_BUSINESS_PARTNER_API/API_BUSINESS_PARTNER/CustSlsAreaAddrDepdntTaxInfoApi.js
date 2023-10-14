"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntTaxInfoApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustSlsAreaAddrDepdntTaxInfo_1 = require("./CustSlsAreaAddrDepdntTaxInfo");
const CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1 = require("./CustSlsAreaAddrDepdntTaxInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSlsAreaAddrDepdntTaxInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustSlsAreaAddrDepdntTaxInfoApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1.CustSlsAreaAddrDepdntTaxInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                /**
                 * Static representation of the {@link salesOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false),
                /**
                 * Static representation of the {@link distributionChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false),
                /**
                 * Static representation of the {@link division} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                /**
                 * Static representation of the {@link departureCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false),
                /**
                 * Static representation of the {@link customerTaxCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CATEGORY: fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link customerTaxClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo)
            };
        }
        return this._schema;
    }
}
exports.CustSlsAreaAddrDepdntTaxInfoApi = CustSlsAreaAddrDepdntTaxInfoApi;
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfoApi.js.map