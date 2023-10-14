"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesReporting = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPFinancialServicesReporting" of service "API_BUSINESS_PARTNER".
 */
class BpFinancialServicesReporting extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpFinancialServicesReporting = BpFinancialServicesReporting;
/**
 * Technical entity name for BpFinancialServicesReporting.
 */
BpFinancialServicesReporting._entityName = 'A_BPFinancialServicesReporting';
/**
 * Default url path for the according service.
 */
BpFinancialServicesReporting._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpFinancialServicesReporting entity
 */
BpFinancialServicesReporting._keys = ['BusinessPartner'];
//# sourceMappingURL=BpFinancialServicesReporting.js.map