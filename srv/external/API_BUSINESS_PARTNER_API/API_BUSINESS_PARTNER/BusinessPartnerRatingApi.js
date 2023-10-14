"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRatingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartnerRating_1 = require("./BusinessPartnerRating");
const BusinessPartnerRatingRequestBuilder_1 = require("./BusinessPartnerRatingRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerRatingApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerRating_1.BusinessPartnerRating;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerRatingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerRatingRequestBuilder_1.BusinessPartnerRatingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerRating_1.BusinessPartnerRating, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link businessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerRatingProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_PROCEDURE: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingProcedure', 'Edm.String', false),
                /**
                 * Static representation of the {@link bpRatingValidityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_RATING_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('BPRatingValidityEndDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link businessPartnerRatingGrade} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_GRADE: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingGrade', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerRatingTrend} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_TREND: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingTrend', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpRatingValidityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_RATING_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('BPRatingValidityStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpRatingCreationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_RATING_CREATION_DATE: fieldBuilder.buildEdmTypeField('BPRatingCreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerRatingComment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_COMMENT: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingComment', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerRatingIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_IS_ALLOWED: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingIsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpRatingIsValidOnKeyDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_RATING_IS_VALID_ON_KEY_DATE: fieldBuilder.buildEdmTypeField('BPRatingIsValidOnKeyDate', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerRatingKeyDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_KEY_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingKeyDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerRatingIsExpired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RATING_IS_EXPIRED: fieldBuilder.buildEdmTypeField('BusinessPartnerRatingIsExpired', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerRating_1.BusinessPartnerRating)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerRatingApi = BusinessPartnerRatingApi;
//# sourceMappingURL=BusinessPartnerRatingApi.js.map