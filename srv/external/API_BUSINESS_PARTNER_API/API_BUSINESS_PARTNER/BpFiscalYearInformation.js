"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFiscalYearInformation = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPFiscalYearInformation" of service "API_BUSINESS_PARTNER".
 */
class BpFiscalYearInformation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpFiscalYearInformation = BpFiscalYearInformation;
/**
 * Technical entity name for BpFiscalYearInformation.
 */
BpFiscalYearInformation._entityName = 'A_BPFiscalYearInformation';
/**
 * Default url path for the according service.
 */
BpFiscalYearInformation._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpFiscalYearInformation entity
 */
BpFiscalYearInformation._keys = ['BusinessPartner', 'BusinessPartnerFiscalYear'];
//# sourceMappingURL=BpFiscalYearInformation.js.map