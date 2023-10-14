"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpRelationship = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BPRelationship" of service "API_BUSINESS_PARTNER".
 */
class BpRelationship extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpRelationship = BpRelationship;
/**
 * Technical entity name for BpRelationship.
 */
BpRelationship._entityName = 'A_BPRelationship';
/**
 * Default url path for the according service.
 */
BpRelationship._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BpRelationship entity
 */
BpRelationship._keys = [
    'RelationshipNumber',
    'BusinessPartner1',
    'BusinessPartner2',
    'ValidityEndDate'
];
//# sourceMappingURL=BpRelationship.js.map