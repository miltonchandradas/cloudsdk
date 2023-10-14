"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpIntlAddressVersion = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPIntlAddressVersion" of service "API_BUSINESS_PARTNER".
 */
class BpIntlAddressVersion extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpIntlAddressVersion = BpIntlAddressVersion;
/**
 * Technical entity name for BpIntlAddressVersion.
 */
BpIntlAddressVersion._entityName = 'A_BPIntlAddressVersion';
/**
 * Default url path for the according service.
 */
BpIntlAddressVersion._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpIntlAddressVersion entity
 */
BpIntlAddressVersion._keys = ['BusinessPartner', 'AddressID', 'AddressRepresentationCode'];
//# sourceMappingURL=BpIntlAddressVersion.js.map