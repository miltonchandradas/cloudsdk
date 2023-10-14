"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpCreditWorthiness = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPCreditWorthiness" of service "API_BUSINESS_PARTNER".
 */
class BpCreditWorthiness extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpCreditWorthiness = BpCreditWorthiness;
/**
 * Technical entity name for BpCreditWorthiness.
 */
BpCreditWorthiness._entityName = 'A_BPCreditWorthiness';
/**
 * Default url path for the according service.
 */
BpCreditWorthiness._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpCreditWorthiness entity
 */
BpCreditWorthiness._keys = ['BusinessPartner'];
//# sourceMappingURL=BpCreditWorthiness.js.map