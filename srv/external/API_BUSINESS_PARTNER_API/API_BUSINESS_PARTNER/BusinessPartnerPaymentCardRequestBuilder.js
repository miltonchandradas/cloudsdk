"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerPaymentCardRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerPaymentCard_1 = require("./BusinessPartnerPaymentCard");
/**
 * Request builder class for operations supported on the {@link BusinessPartnerPaymentCard} entity.
 */
class BusinessPartnerPaymentCardRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerPaymentCard` entity based on its keys.
     * @param businessPartner Key property. See {@link BusinessPartnerPaymentCard.businessPartner}.
     * @param paymentCardId Key property. See {@link BusinessPartnerPaymentCard.paymentCardId}.
     * @param paymentCardType Key property. See {@link BusinessPartnerPaymentCard.paymentCardType}.
     * @param cardNumber Key property. See {@link BusinessPartnerPaymentCard.cardNumber}.
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerPaymentCard` entity based on its keys.
     */
    getByKey(businessPartner, paymentCardId, paymentCardType, cardNumber) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            PaymentCardID: paymentCardId,
            PaymentCardType: paymentCardType,
            CardNumber: cardNumber
        });
    }
    /**
     * Returns a request builder for querying all `BusinessPartnerPaymentCard` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerPaymentCard` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessPartnerPaymentCard` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerPaymentCard`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerPaymentCard`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerPaymentCard`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessPartnerOrEntity, paymentCardId, paymentCardType, cardNumber) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                PaymentCardID: paymentCardId,
                PaymentCardType: paymentCardType,
                CardNumber: cardNumber
            });
    }
}
exports.BusinessPartnerPaymentCardRequestBuilder = BusinessPartnerPaymentCardRequestBuilder;
//# sourceMappingURL=BusinessPartnerPaymentCardRequestBuilder.js.map