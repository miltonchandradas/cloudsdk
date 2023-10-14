"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRating = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_BusinessPartnerRating" of service "API_BUSINESS_PARTNER".
 */
class BusinessPartnerRating extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerRating = BusinessPartnerRating;
/**
 * Technical entity name for BusinessPartnerRating.
 */
BusinessPartnerRating._entityName = 'A_BusinessPartnerRating';
/**
 * Default url path for the according service.
 */
BusinessPartnerRating._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
/**
 * All key fields of the BusinessPartnerRating entity
 */
BusinessPartnerRating._keys = [
    'BusinessPartner',
    'BusinessPartnerRatingProcedure',
    'BPRatingValidityEndDate'
];
//# sourceMappingURL=BusinessPartnerRating.js.map