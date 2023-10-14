"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntTaxInfo = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntTaxInfo" of service "API_BUSINESS_PARTNER".
 */
class CustSlsAreaAddrDepdntTaxInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustSlsAreaAddrDepdntTaxInfo = CustSlsAreaAddrDepdntTaxInfo;
/**
 * Technical entity name for CustSlsAreaAddrDepdntTaxInfo.
 */
CustSlsAreaAddrDepdntTaxInfo._entityName = 'A_CustSlsAreaAddrDepdntTaxInfo';
/**
 * Default url path for the according service.
 */
CustSlsAreaAddrDepdntTaxInfo._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the CustSlsAreaAddrDepdntTaxInfo entity
 */
CustSlsAreaAddrDepdntTaxInfo._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'AddressID',
    'DepartureCountry',
    'CustomerTaxCategory'
];
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfo.js.map