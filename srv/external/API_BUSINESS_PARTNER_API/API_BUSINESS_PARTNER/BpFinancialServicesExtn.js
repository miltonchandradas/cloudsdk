"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesExtn = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPFinancialServicesExtn" of service "API_BUSINESS_PARTNER".
 */
class BpFinancialServicesExtn extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpFinancialServicesExtn = BpFinancialServicesExtn;
/**
 * Technical entity name for BpFinancialServicesExtn.
 */
BpFinancialServicesExtn._entityName = 'A_BPFinancialServicesExtn';
/**
 * Default url path for the according service.
 */
BpFinancialServicesExtn._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpFinancialServicesExtn entity
 */
BpFinancialServicesExtn._keys = ['BusinessPartner'];
//# sourceMappingURL=BpFinancialServicesExtn.js.map