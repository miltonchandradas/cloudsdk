"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpRelationshipApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpRelationship_1 = require("./BpRelationship");
const BpRelationshipRequestBuilder_1 = require("./BpRelationshipRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpRelationshipApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpRelationship_1.BpRelationship;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpRelationshipApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpRelationshipRequestBuilder_1.BpRelationshipRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpRelationship_1.BpRelationship, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link relationshipNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELATIONSHIP_NUMBER: fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartner1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_1: fieldBuilder.buildEdmTypeField('BusinessPartner1', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartner2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_2: fieldBuilder.buildEdmTypeField('BusinessPartner2', 'Edm.String', false),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link validityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link isStandardRelationship} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_STANDARD_RELATIONSHIP: fieldBuilder.buildEdmTypeField('IsStandardRelationship', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link relationshipCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELATIONSHIP_CATEGORY: fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpRelationshipType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_RELATIONSHIP_TYPE: fieldBuilder.buildEdmTypeField('BPRelationshipType', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link lastChangeTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpRelationship_1.BpRelationship)
            };
        }
        return this._schema;
    }
}
exports.BpRelationshipApi = BpRelationshipApi;
//# sourceMappingURL=BpRelationshipApi.js.map