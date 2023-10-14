"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpDataController = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPDataController" of service "API_BUSINESS_PARTNER".
 */
class BpDataController extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpDataController = BpDataController;
/**
 * Technical entity name for BpDataController.
 */
BpDataController._entityName = 'A_BPDataController';
/**
 * Default url path for the according service.
 */
BpDataController._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpDataController entity
 */
BpDataController._keys = [
    'BusinessPartner',
    'DataController',
    'PurposeForPersonalData'
];
//# sourceMappingURL=BpDataController.js.map