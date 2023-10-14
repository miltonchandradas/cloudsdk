"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpCreditWorthinessApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpCreditWorthiness_1 = require("./BpCreditWorthiness");
const BpCreditWorthinessRequestBuilder_1 = require("./BpCreditWorthinessRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpCreditWorthinessApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpCreditWorthiness_1.BpCreditWorthiness;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpCreditWorthinessApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpCreditWorthinessRequestBuilder_1.BpCreditWorthinessRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpCreditWorthiness_1.BpCreditWorthiness, this.deSerializers);
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
                 * Static representation of the {@link busPartCreditStanding} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUS_PART_CREDIT_STANDING: fieldBuilder.buildEdmTypeField('BusPartCreditStanding', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpCreditStandingStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CREDIT_STANDING_STATUS: fieldBuilder.buildEdmTypeField('BPCreditStandingStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link creditRatingAgency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREDIT_RATING_AGENCY: fieldBuilder.buildEdmTypeField('CreditRatingAgency', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpCreditStandingComment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CREDIT_STANDING_COMMENT: fieldBuilder.buildEdmTypeField('BPCreditStandingComment', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpCreditStandingDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CREDIT_STANDING_DATE: fieldBuilder.buildEdmTypeField('BPCreditStandingDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpCreditStandingRating} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CREDIT_STANDING_RATING: fieldBuilder.buildEdmTypeField('BPCreditStandingRating', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpLegalProceedingStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LEGAL_PROCEEDING_STATUS: fieldBuilder.buildEdmTypeField('BPLegalProceedingStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpLglProceedingInitiationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LGL_PROCEEDING_INITIATION_DATE: fieldBuilder.buildEdmTypeField('BPLglProceedingInitiationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerIsUnderOath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_IS_UNDER_OATH: fieldBuilder.buildEdmTypeField('BusinessPartnerIsUnderOath', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerOathDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_OATH_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerOathDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerIsBankrupt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_IS_BANKRUPT: fieldBuilder.buildEdmTypeField('BusinessPartnerIsBankrupt', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerBankruptcyDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_BANKRUPTCY_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerBankruptcyDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpForeclosureIsInitiated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_FORECLOSURE_IS_INITIATED: fieldBuilder.buildEdmTypeField('BPForeclosureIsInitiated', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpForeclosureDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_FORECLOSURE_DATE: fieldBuilder.buildEdmTypeField('BPForeclosureDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpCrdtWrthnssAccessChkIsActive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE: fieldBuilder.buildEdmTypeField('BPCrdtWrthnssAccessChkIsActive', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpCreditWorthiness_1.BpCreditWorthiness)
            };
        }
        return this._schema;
    }
}
exports.BpCreditWorthinessApi = BpCreditWorthinessApi;
//# sourceMappingURL=BpCreditWorthinessApi.js.map