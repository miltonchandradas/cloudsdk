"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusPartAddrDepdntTaxNmbr = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BusPartAddrDepdntTaxNmbr" of service "API_BUSINESS_PARTNER".
 */
class BusPartAddrDepdntTaxNmbr extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusPartAddrDepdntTaxNmbr = BusPartAddrDepdntTaxNmbr;
/**
 * Technical entity name for BusPartAddrDepdntTaxNmbr.
 */
BusPartAddrDepdntTaxNmbr._entityName = 'A_BusPartAddrDepdntTaxNmbr';
/**
 * Default url path for the according service.
 */
BusPartAddrDepdntTaxNmbr._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BusPartAddrDepdntTaxNmbr entity
 */
BusPartAddrDepdntTaxNmbr._keys = ['BusinessPartner', 'AddressID', 'BPTaxType'];
//# sourceMappingURL=BusPartAddrDepdntTaxNmbr.js.map