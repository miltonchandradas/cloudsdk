"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntExtIdentifier = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
 */
class CustAddrDepdntExtIdentifier extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustAddrDepdntExtIdentifier = CustAddrDepdntExtIdentifier;
/**
 * Technical entity name for CustAddrDepdntExtIdentifier.
 */
CustAddrDepdntExtIdentifier._entityName = 'A_CustAddrDepdntExtIdentifier';
/**
 * Default url path for the according service.
 */
CustAddrDepdntExtIdentifier._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the CustAddrDepdntExtIdentifier entity
 */
CustAddrDepdntExtIdentifier._keys = ['Customer', 'AddressID'];
//# sourceMappingURL=CustAddrDepdntExtIdentifier.js.map