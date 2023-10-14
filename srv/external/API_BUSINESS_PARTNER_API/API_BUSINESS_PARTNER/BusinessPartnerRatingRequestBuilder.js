"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRatingRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerRating_1 = require("./BusinessPartnerRating");
/**
 * Request builder class for operations supported on the {@link BusinessPartnerRating} entity.
 */
class BusinessPartnerRatingRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerRating` entity based on its keys.
     * @param businessPartner Key property. See {@link BusinessPartnerRating.businessPartner}.
     * @param businessPartnerRatingProcedure Key property. See {@link BusinessPartnerRating.businessPartnerRatingProcedure}.
     * @param bpRatingValidityEndDate Key property. See {@link BusinessPartnerRating.bpRatingValidityEndDate}.
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerRating` entity based on its keys.
     */
    getByKey(businessPartner, businessPartnerRatingProcedure, bpRatingValidityEndDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BusinessPartnerRatingProcedure: businessPartnerRatingProcedure,
            BPRatingValidityEndDate: bpRatingValidityEndDate
        });
    }
    /**
     * Returns a request builder for querying all `BusinessPartnerRating` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerRating` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessPartnerRating` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRating`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerRating`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRating`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessPartnerOrEntity, businessPartnerRatingProcedure, bpRatingValidityEndDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerRating_1.BusinessPartnerRating
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BusinessPartnerRatingProcedure: businessPartnerRatingProcedure,
                BPRatingValidityEndDate: bpRatingValidityEndDate
            });
    }
}
exports.BusinessPartnerRatingRequestBuilder = BusinessPartnerRatingRequestBuilder;
//# sourceMappingURL=BusinessPartnerRatingRequestBuilder.js.map