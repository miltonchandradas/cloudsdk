"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesReportingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpFinancialServicesReporting_1 = require("./BpFinancialServicesReporting");
const BpFinancialServicesReportingRequestBuilder_1 = require("./BpFinancialServicesReportingRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFinancialServicesReportingApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpFinancialServicesReporting_1.BpFinancialServicesReporting;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpFinancialServicesReportingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpFinancialServicesReportingRequestBuilder_1.BpFinancialServicesReportingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpFinancialServicesReporting_1.BpFinancialServicesReporting, this.deSerializers);
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
                 * Static representation of the {@link bpIsNonResident} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IS_NON_RESIDENT: fieldBuilder.buildEdmTypeField('BPIsNonResident', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpNonResidencyStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_NON_RESIDENCY_START_DATE: fieldBuilder.buildEdmTypeField('BPNonResidencyStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpIsMultimillionLoanRecipient} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IS_MULTIMILLION_LOAN_RECIPIENT: fieldBuilder.buildEdmTypeField('BPIsMultimillionLoanRecipient', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpLoanReportingBorrowerNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LOAN_REPORTING_BORROWER_NUMBER: fieldBuilder.buildEdmTypeField('BPLoanReportingBorrowerNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpLoanRptgBorrowerEntityNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LOAN_RPTG_BORROWER_ENTITY_NUMBER: fieldBuilder.buildEdmTypeField('BPLoanRptgBorrowerEntityNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpCreditStandingReview} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CREDIT_STANDING_REVIEW: fieldBuilder.buildEdmTypeField('BPCreditStandingReview', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpCreditStandingReviewDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CREDIT_STANDING_REVIEW_DATE: fieldBuilder.buildEdmTypeField('BPCreditStandingReviewDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerLoanToManager} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_LOAN_TO_MANAGER: fieldBuilder.buildEdmTypeField('BusinessPartnerLoanToManager', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpCompanyRelationship} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_COMPANY_RELATIONSHIP: fieldBuilder.buildEdmTypeField('BPCompanyRelationship', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpLoanReportingCreditorNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LOAN_REPORTING_CREDITOR_NUMBER: fieldBuilder.buildEdmTypeField('BPLoanReportingCreditorNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpOeNbIdentNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_OE_NB_IDENT_NUMBER: fieldBuilder.buildEdmTypeField('BPOeNBIdentNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpOeNbTargetGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_OE_NB_TARGET_GROUP: fieldBuilder.buildEdmTypeField('BPOeNBTargetGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpOeNbIdentNumberAssigned} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_OE_NB_IDENT_NUMBER_ASSIGNED: fieldBuilder.buildEdmTypeField('BPOeNBIdentNumberAssigned', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpOeNbInstituteNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_OE_NB_INSTITUTE_NUMBER: fieldBuilder.buildEdmTypeField('BPOeNBInstituteNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerIsOeNbInstitute} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_IS_OE_NB_INSTITUTE: fieldBuilder.buildEdmTypeField('BusinessPartnerIsOeNBInstitute', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpGroupAssignmentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_GROUP_ASSIGNMENT_CATEGORY: fieldBuilder.buildEdmTypeField('BPGroupAssignmentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerGroupName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_GROUP_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerGroupName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerLegalEntity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField('BusinessPartnerLegalEntity', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpGerAstRglnRestrictedAstQuota} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_GER_AST_RGLN_RESTRICTED_AST_QUOTA: fieldBuilder.buildEdmTypeField('BPGerAstRglnRestrictedAstQuota', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerDebtorGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_DEBTOR_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerDebtorGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerBusinessPurpose} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_BUSINESS_PURPOSE: fieldBuilder.buildEdmTypeField('BusinessPartnerBusinessPurpose', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerRiskGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_RISK_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerRiskGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpRiskGroupingDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_RISK_GROUPING_DATE: fieldBuilder.buildEdmTypeField('BPRiskGroupingDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpHasGroupAffiliation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_HAS_GROUP_AFFILIATION: fieldBuilder.buildEdmTypeField('BPHasGroupAffiliation', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpIsMonetaryFinInstitution} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IS_MONETARY_FIN_INSTITUTION: fieldBuilder.buildEdmTypeField('BPIsMonetaryFinInstitution', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpCrdtStandingReviewIsRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CRDT_STANDING_REVIEW_IS_REQUIRED: fieldBuilder.buildEdmTypeField('BPCrdtStandingReviewIsRequired', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpLoanMonitoringIsRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LOAN_MONITORING_IS_REQUIRED: fieldBuilder.buildEdmTypeField('BPLoanMonitoringIsRequired', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpHasCreditingRelief} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_HAS_CREDITING_RELIEF: fieldBuilder.buildEdmTypeField('BPHasCreditingRelief', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpInvestInRstrcdAstIsAuthzd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_INVEST_IN_RSTRCD_AST_IS_AUTHZD: fieldBuilder.buildEdmTypeField('BPInvestInRstrcdAstIsAuthzd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpCentralBankCountryRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_CENTRAL_BANK_COUNTRY_REGION: fieldBuilder.buildEdmTypeField('BPCentralBankCountryRegion', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpFinancialServicesReporting_1.BpFinancialServicesReporting)
            };
        }
        return this._schema;
    }
}
exports.BpFinancialServicesReportingApi = BpFinancialServicesReportingApi;
//# sourceMappingURL=BpFinancialServicesReportingApi.js.map