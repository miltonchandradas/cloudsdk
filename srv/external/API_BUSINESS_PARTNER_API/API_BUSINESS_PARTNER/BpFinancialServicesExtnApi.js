"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesExtnApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpFinancialServicesExtn_1 = require("./BpFinancialServicesExtn");
const BpFinancialServicesExtnRequestBuilder_1 = require("./BpFinancialServicesExtnRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFinancialServicesExtnApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpFinancialServicesExtn_1.BpFinancialServicesExtn;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpFinancialServicesExtnApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpFinancialServicesExtnRequestBuilder_1.BpFinancialServicesExtnRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpFinancialServicesExtn_1.BpFinancialServicesExtn, this.deSerializers);
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
                 * Static representation of the {@link businessPartnerIsVip} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_IS_VIP: fieldBuilder.buildEdmTypeField('BusinessPartnerIsVIP', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link tradingPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRADING_PARTNER: fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true),
                /**
                 * Static representation of the {@link factoryCalendar} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FACTORY_CALENDAR: fieldBuilder.buildEdmTypeField('FactoryCalendar', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerOfficeCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_OFFICE_COUNTRY: fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerOfficeRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_OFFICE_REGION: fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpRegisteredOfficeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_REGISTERED_OFFICE_NAME: fieldBuilder.buildEdmTypeField('BPRegisteredOfficeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpBalanceSheetCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_BALANCE_SHEET_CURRENCY: fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpLastCptlIncrAmtInBalShtCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPLastCptlIncrAmtInBalShtCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link bpLastCapitalIncreaseYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LAST_CAPITAL_INCREASE_YEAR: fieldBuilder.buildEdmTypeField('BPLastCapitalIncreaseYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpBalanceSheetDisplayType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_BALANCE_SHEET_DISPLAY_TYPE: fieldBuilder.buildEdmTypeField('BPBalanceSheetDisplayType', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerCitizenship} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_CITIZENSHIP: fieldBuilder.buildEdmTypeField('BusinessPartnerCitizenship', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpMaritalPropertyRegime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_MARITAL_PROPERTY_REGIME: fieldBuilder.buildEdmTypeField('BPMaritalPropertyRegime', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerIncomeCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_INCOME_CURRENCY: fieldBuilder.buildEdmTypeField('BusinessPartnerIncomeCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpNumberOfChildren} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_NUMBER_OF_CHILDREN: fieldBuilder.buildEdmTypeField('BPNumberOfChildren', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link bpNumberOfHouseholdMembers} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_NUMBER_OF_HOUSEHOLD_MEMBERS: fieldBuilder.buildEdmTypeField('BPNumberOfHouseholdMembers', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link bpAnnualNetIncAmtInIncomeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY: fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInIncomeCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link bpMonthlyNetIncAmtInIncomeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY: fieldBuilder.buildEdmTypeField('BPMonthlyNetIncAmtInIncomeCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link bpAnnualNetIncomeYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_ANNUAL_NET_INCOME_YEAR: fieldBuilder.buildEdmTypeField('BPAnnualNetIncomeYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpMonthlyNetIncomeMonth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_MONTHLY_NET_INCOME_MONTH: fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeMonth', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpMonthlyNetIncomeYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_MONTHLY_NET_INCOME_YEAR: fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpPlaceOfDeathName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_PLACE_OF_DEATH_NAME: fieldBuilder.buildEdmTypeField('BPPlaceOfDeathName', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerIsUnwanted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_IS_UNWANTED: fieldBuilder.buildEdmTypeField('CustomerIsUnwanted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link undesirabilityReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNDESIRABILITY_REASON: fieldBuilder.buildEdmTypeField('UndesirabilityReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link undesirabilityComment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNDESIRABILITY_COMMENT: fieldBuilder.buildEdmTypeField('UndesirabilityComment', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastCustomerContactDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CUSTOMER_CONTACT_DATE: fieldBuilder.buildEdmTypeField('LastCustomerContactDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bpGroupingCharacter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_GROUPING_CHARACTER: fieldBuilder.buildEdmTypeField('BPGroupingCharacter', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpLetterSalutation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_LETTER_SALUTATION: fieldBuilder.buildEdmTypeField('BPLetterSalutation', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerTargetGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_TARGET_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerTargetGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerEmployeeGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_EMPLOYEE_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerEmployeeGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerIsEmployee} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_IS_EMPLOYEE: fieldBuilder.buildEdmTypeField('BusinessPartnerIsEmployee', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bpTermnBusRelationsBankDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_TERMN_BUS_RELATIONS_BANK_DATE: fieldBuilder.buildEdmTypeField('BPTermnBusRelationsBankDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpFinancialServicesExtn_1.BpFinancialServicesExtn)
            };
        }
        return this._schema;
    }
}
exports.BpFinancialServicesExtnApi = BpFinancialServicesExtnApi;
//# sourceMappingURL=BpFinancialServicesExtnApi.js.map