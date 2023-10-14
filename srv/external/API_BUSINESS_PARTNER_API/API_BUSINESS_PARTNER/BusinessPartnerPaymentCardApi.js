"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerPaymentCardApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartnerPaymentCard_1 = require("./BusinessPartnerPaymentCard");
const BusinessPartnerPaymentCardRequestBuilder_1 = require("./BusinessPartnerPaymentCardRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerPaymentCardApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerPaymentCardApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerPaymentCardRequestBuilder_1.BusinessPartnerPaymentCardRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard, this.deSerializers);
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
                 * Static representation of the {@link paymentCardId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_ID: fieldBuilder.buildEdmTypeField('PaymentCardID', 'Edm.String', false),
                /**
                 * Static representation of the {@link paymentCardType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_TYPE: fieldBuilder.buildEdmTypeField('PaymentCardType', 'Edm.String', false),
                /**
                 * Static representation of the {@link cardNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_NUMBER: fieldBuilder.buildEdmTypeField('CardNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link isStandardCard} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_STANDARD_CARD: fieldBuilder.buildEdmTypeField('IsStandardCard', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link cardDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_DESCRIPTION: fieldBuilder.buildEdmTypeField('CardDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link validityDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_DATE: fieldBuilder.buildEdmTypeField('ValidityDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link cardHolder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_HOLDER: fieldBuilder.buildEdmTypeField('CardHolder', 'Edm.String', true),
                /**
                 * Static representation of the {@link cardIssuingBank} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_ISSUING_BANK: fieldBuilder.buildEdmTypeField('CardIssuingBank', 'Edm.String', true),
                /**
                 * Static representation of the {@link cardIssueDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_ISSUE_DATE: fieldBuilder.buildEdmTypeField('CardIssueDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link paymentCardLock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_LOCK: fieldBuilder.buildEdmTypeField('PaymentCardLock', 'Edm.String', true),
                /**
                 * Static representation of the {@link maskedCardNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MASKED_CARD_NUMBER: fieldBuilder.buildEdmTypeField('MaskedCardNumber', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerPaymentCardApi = BusinessPartnerPaymentCardApi;
//# sourceMappingURL=BusinessPartnerPaymentCardApi.js.map