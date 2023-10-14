"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntInfoApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustSlsAreaAddrDepdntInfo_1 = require("./CustSlsAreaAddrDepdntInfo");
const CustSlsAreaAddrDepdntInfoRequestBuilder_1 = require("./CustSlsAreaAddrDepdntInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSlsAreaAddrDepdntInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustSlsAreaAddrDepdntInfoApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustSlsAreaAddrDepdntInfoRequestBuilder_1.CustSlsAreaAddrDepdntInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, this.deSerializers);
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
                 * Static representation of the {@link incotermsClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsSupChnLoc1AddlUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link incotermsSupChnLoc2AddlUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link incotermsSupChnDvtgLocAddlUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link deliveryIsBlocked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_IS_BLOCKED: fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link shippingCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplyingPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo)
            };
        }
        return this._schema;
    }
}
exports.CustSlsAreaAddrDepdntInfoApi = CustSlsAreaAddrDepdntInfoApi;
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoApi.js.map