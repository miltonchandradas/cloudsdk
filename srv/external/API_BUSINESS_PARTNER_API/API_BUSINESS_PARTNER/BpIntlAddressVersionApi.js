"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpIntlAddressVersionApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpIntlAddressVersion_1 = require("./BpIntlAddressVersion");
const BpIntlAddressVersionRequestBuilder_1 = require("./BpIntlAddressVersionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpIntlAddressVersionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpIntlAddressVersion_1.BpIntlAddressVersion;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpIntlAddressVersionApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpIntlAddressVersionRequestBuilder_1.BpIntlAddressVersionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpIntlAddressVersion_1.BpIntlAddressVersion, this.deSerializers);
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
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                /**
                 * Static representation of the {@link addressRepresentationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link addresseeFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESSEE_FULL_NAME: fieldBuilder.buildEdmTypeField('AddresseeFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressIdByExternalSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID_BY_EXTERNAL_SYSTEM: fieldBuilder.buildEdmTypeField('AddressIDByExternalSystem', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressPersonId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_PERSON_ID: fieldBuilder.buildEdmTypeField('AddressPersonID', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressSearchTerm1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_SEARCH_TERM_1: fieldBuilder.buildEdmTypeField('AddressSearchTerm1', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressSearchTerm2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_SEARCH_TERM_2: fieldBuilder.buildEdmTypeField('AddressSearchTerm2', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressTimeZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true),
                /**
                 * Static representation of the {@link careOfName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARE_OF_NAME: fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true),
                /**
                 * Static representation of the {@link cityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link cityNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_NUMBER: fieldBuilder.buildEdmTypeField('CityNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryServiceNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryServiceTypeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link districtName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRICT_NAME: fieldBuilder.buildEdmTypeField('DistrictName', 'Edm.String', true),
                /**
                 * Static representation of the {@link formOfAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseNumberSupplementText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true),
                /**
                 * Static representation of the {@link personFamilyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FAMILY_NAME: fieldBuilder.buildEdmTypeField('PersonFamilyName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personGivenName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_GIVEN_NAME: fieldBuilder.buildEdmTypeField('PersonGivenName', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBox} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxDeviatingCityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxDeviatingCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxDeviatingRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxIsWithoutNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link poBoxLobbyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link postalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link prfrdCommMediumType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                /**
                 * Static representation of the {@link secondaryRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECONDARY_REGION: fieldBuilder.buildEdmTypeField('SecondaryRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link secondaryRegionName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECONDARY_REGION_NAME: fieldBuilder.buildEdmTypeField('SecondaryRegionName', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetPrefixName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_PREFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetPrefixName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetPrefixName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_PREFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetPrefixName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetSuffixName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SUFFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetSuffixName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetSuffixName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SUFFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetSuffixName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link taxJurisdiction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true),
                /**
                 * Static representation of the {@link tertiaryRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TERTIARY_REGION: fieldBuilder.buildEdmTypeField('TertiaryRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link tertiaryRegionName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TERTIARY_REGION_NAME: fieldBuilder.buildEdmTypeField('TertiaryRegionName', 'Edm.String', true),
                /**
                 * Static representation of the {@link transportZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true),
                /**
                 * Static representation of the {@link villageName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VILLAGE_NAME: fieldBuilder.buildEdmTypeField('VillageName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpIntlAddressVersion_1.BpIntlAddressVersion)
            };
        }
        return this._schema;
    }
}
exports.BpIntlAddressVersionApi = BpIntlAddressVersionApi;
//# sourceMappingURL=BpIntlAddressVersionApi.js.map