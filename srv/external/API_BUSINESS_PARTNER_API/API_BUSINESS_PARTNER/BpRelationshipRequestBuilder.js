"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpRelationshipRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpRelationship_1 = require("./BpRelationship");
/**
 * Request builder class for operations supported on the {@link BpRelationship} entity.
 */
class BpRelationshipRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpRelationship` entity based on its keys.
     * @param relationshipNumber Key property. See {@link BpRelationship.relationshipNumber}.
     * @param businessPartner1 Key property. See {@link BpRelationship.businessPartner1}.
     * @param businessPartner2 Key property. See {@link BpRelationship.businessPartner2}.
     * @param validityEndDate Key property. See {@link BpRelationship.validityEndDate}.
     * @returns A request builder for creating requests to retrieve one `BpRelationship` entity based on its keys.
     */
    getByKey(relationshipNumber, businessPartner1, businessPartner2, validityEndDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RelationshipNumber: relationshipNumber,
            BusinessPartner1: businessPartner1,
            BusinessPartner2: businessPartner2,
            ValidityEndDate: validityEndDate
        });
    }
    /**
     * Returns a request builder for querying all `BpRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `BpRelationship` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BpRelationship` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpRelationship`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BpRelationship`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpRelationship`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(relationshipNumberOrEntity, businessPartner1, businessPartner2, validityEndDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, relationshipNumberOrEntity instanceof BpRelationship_1.BpRelationship
            ? relationshipNumberOrEntity
            : {
                RelationshipNumber: relationshipNumberOrEntity,
                BusinessPartner1: businessPartner1,
                BusinessPartner2: businessPartner2,
                ValidityEndDate: validityEndDate
            });
    }
}
exports.BpRelationshipRequestBuilder = BpRelationshipRequestBuilder;
//# sourceMappingURL=BpRelationshipRequestBuilder.js.map