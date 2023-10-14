/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerApi } from './BusinessPartnerApi';
import {
  BpCreditWorthiness,
  BpCreditWorthinessType
} from './BpCreditWorthiness';
import { BpDataController, BpDataControllerType } from './BpDataController';
import {
  BpFinancialServicesReporting,
  BpFinancialServicesReportingType
} from './BpFinancialServicesReporting';
import {
  BpFiscalYearInformation,
  BpFiscalYearInformationType
} from './BpFiscalYearInformation';
import { BpRelationship, BpRelationshipType } from './BpRelationship';
import {
  BuPaIdentification,
  BuPaIdentificationType
} from './BuPaIdentification';
import { BuPaIndustry, BuPaIndustryType } from './BuPaIndustry';
import {
  BpFinancialServicesExtn,
  BpFinancialServicesExtnType
} from './BpFinancialServicesExtn';
import {
  BusinessPartnerAddress,
  BusinessPartnerAddressType
} from './BusinessPartnerAddress';
import {
  BusinessPartnerBank,
  BusinessPartnerBankType
} from './BusinessPartnerBank';
import {
  BusinessPartnerContact,
  BusinessPartnerContactType
} from './BusinessPartnerContact';
import {
  BusinessPartnerRating,
  BusinessPartnerRatingType
} from './BusinessPartnerRating';
import {
  BusinessPartnerRole,
  BusinessPartnerRoleType
} from './BusinessPartnerRole';
import {
  BusinessPartnerTaxNumber,
  BusinessPartnerTaxNumberType
} from './BusinessPartnerTaxNumber';
import {
  BusPartAddrDepdntTaxNmbr,
  BusPartAddrDepdntTaxNmbrType
} from './BusPartAddrDepdntTaxNmbr';
import { Customer, CustomerType } from './Customer';
import {
  BusinessPartnerPaymentCard,
  BusinessPartnerPaymentCardType
} from './BusinessPartnerPaymentCard';
import { Supplier, SupplierType } from './Supplier';
/**
 * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartner<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessPartnerType<T>
{
  readonly _entityApi: BusinessPartnerApi<T>;
  /**
   * Technical entity name for BusinessPartner.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessPartner entity
   */
  static _keys: string[];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Academic Title: Key.
   * Maximum length: 4.
   * @nullable
   */
  academicTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Category.
   * Maximum length: 1.
   * @nullable
   */
  businessPartnerCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Full Name.
   * Maximum length: 81.
   * @nullable
   */
  businessPartnerFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Grouping.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerGrouping?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Name.
   * Maximum length: 81.
   * @nullable
   */
  businessPartnerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner GUID.
   * @nullable
   */
  businessPartnerUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Business Partner: Correspondence Language.
   * Maximum length: 2.
   * @nullable
   */
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User who created the object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which the object was created.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time at which the object was created.
   * @nullable
   */
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * First Name of Business Partner (Person).
   * Maximum length: 40.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry sector.
   * Maximum length: 10.
   * @nullable
   */
  industry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * International location number  (part 1).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * International location number (Part 2).
   * Maximum length: 5.
   * @nullable
   */
  internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Selection: Business partner is female.
   * @nullable
   */
  isFemale?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Selection: Business partner is male.
   * @nullable
   */
  isMale?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Business Partner Is a Natural Person Under the Tax Laws.
   * Maximum length: 1.
   * @nullable
   */
  isNaturalPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Selection: Sex of business partner is not known.
   * @nullable
   */
  isSexUnknown?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Gender of Business Partner (Person).
   * Maximum length: 1.
   * @nullable
   */
  genderCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business partner: Language.
   * Maximum length: 2.
   * @nullable
   */
  language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date when object was last changed.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time at which object was last changed.
   * @nullable
   */
  lastChangeTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Last user to change object.
   * Maximum length: 12.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name of Business Partner (Person).
   * Maximum length: 40.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP: Legal form of organization.
   * Maximum length: 2.
   * @nullable
   */
  legalForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 1 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 2 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 3 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 4 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date organization founded.
   * @nullable
   */
  organizationFoundationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Liquidation date of organization.
   * @nullable
   */
  organizationLiquidationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Search Term 1 for Business Partner.
   * Maximum length: 20.
   * @nullable
   */
  searchTerm1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Term 2 for Business Partner.
   * Maximum length: 20.
   * @nullable
   */
  searchTerm2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Other Last Name of a Person.
   * Maximum length: 40.
   * @nullable
   */
  additionalLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Birth of Business Partner.
   * @nullable
   */
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Birth: Status.
   * Maximum length: 1.
   * @nullable
   */
  businessPartnerBirthDateStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birthplace of business partner.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerBirthplaceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of death of business partner.
   * @nullable
   */
  businessPartnerDeathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Central Block for Business Partner.
   * @nullable
   */
  businessPartnerIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Business Partner Type.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Tag.
   * Maximum length: 26.
   * @nullable
   */
  eTag?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 1 (group).
   * Maximum length: 40.
   * @nullable
   */
  groupBusinessPartnerName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 2 (group).
   * Maximum length: 40.
   * @nullable
   */
  groupBusinessPartnerName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Number.
   * Maximum length: 10.
   * @nullable
   */
  independentAddressId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check digit for the international location number.
   * Maximum length: 1.
   * @nullable
   */
  internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name or Second Forename of a Person.
   * Maximum length: 40.
   * @nullable
   */
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Name Format Rule.
   * Maximum length: 3.
   * @nullable
   */
  nameCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name format.
   * Maximum length: 2.
   * @nullable
   */
  nameFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Number.
   * Maximum length: 10.
   * @nullable
   */
  personNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Archiving Flag.
   * @nullable
   */
  isMarkedForArchiving?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Business Partner Number in External System.
   * Maximum length: 20.
   * @nullable
   */
  businessPartnerIdByExtSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Print Format.
   * Maximum length: 1.
   * @nullable
   */
  businessPartnerPrintFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occupation/group.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerOccupation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marital Status of Business Partner.
   * Maximum length: 1.
   * @nullable
   */
  busPartMaritalStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality.
   * Maximum length: 3.
   * @nullable
   */
  busPartNationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name at birth of business partner.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerBirthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name supplement, e.g. noble title (key).
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerSupplementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Employer of a Natural Person.
   * Maximum length: 35.
   * @nullable
   */
  naturalPersonEmployerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Prefix (Key).
   * Maximum length: 4.
   * @nullable
   */
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * 2nd name prefix (key).
   * Maximum length: 4.
   * @nullable
   */
  lastNameSecondPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * "Middle Initial" or personal initials.
   * Maximum length: 10.
   * @nullable
   */
  initials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP: Data Controller Not Required.
   * @nullable
   */
  bpDataControllerIsNotRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Company ID of Trading Partner.
   * Maximum length: 6.
   * @nullable
   */
  tradingPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BpCreditWorthiness} entity.
   */
  toBpCreditWorthiness?: BpCreditWorthiness<T> | null;
  /**
   * One-to-many navigation property to the {@link BpDataController} entity.
   */
  toBpDataController: BpDataController<T>[];
  /**
   * One-to-one navigation property to the {@link BpFinancialServicesReporting} entity.
   */
  toBpFinServicesReporting?: BpFinancialServicesReporting<T> | null;
  /**
   * One-to-many navigation property to the {@link BpFiscalYearInformation} entity.
   */
  toBpFiscalYearInformation: BpFiscalYearInformation<T>[];
  /**
   * One-to-many navigation property to the {@link BpRelationship} entity.
   */
  toBpRelationship: BpRelationship<T>[];
  /**
   * One-to-many navigation property to the {@link BuPaIdentification} entity.
   */
  toBuPaIdentification: BuPaIdentification<T>[];
  /**
   * One-to-many navigation property to the {@link BuPaIndustry} entity.
   */
  toBuPaIndustry: BuPaIndustry<T>[];
  /**
   * One-to-one navigation property to the {@link BpFinancialServicesExtn} entity.
   */
  toBusinessPartner?: BpFinancialServicesExtn<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartnerAddress} entity.
   */
  toBusinessPartnerAddress: BusinessPartnerAddress<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerBank} entity.
   */
  toBusinessPartnerBank: BusinessPartnerBank<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerContact} entity.
   */
  toBusinessPartnerContact: BusinessPartnerContact<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerRating} entity.
   */
  toBusinessPartnerRating: BusinessPartnerRating<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerRole} entity.
   */
  toBusinessPartnerRole: BusinessPartnerRole<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerTaxNumber} entity.
   */
  toBusinessPartnerTax: BusinessPartnerTaxNumber<T>[];
  /**
   * One-to-many navigation property to the {@link BusPartAddrDepdntTaxNmbr} entity.
   */
  toBusPartAddrDepdntTaxNmbr: BusPartAddrDepdntTaxNmbr<T>[];
  /**
   * One-to-one navigation property to the {@link Customer} entity.
   */
  toCustomer?: Customer<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartnerPaymentCard} entity.
   */
  toPaymentCard: BusinessPartnerPaymentCard<T>[];
  /**
   * One-to-one navigation property to the {@link Supplier} entity.
   */
  toSupplier?: Supplier<T> | null;
  constructor(_entityApi: BusinessPartnerApi<T>);
}
export interface BusinessPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  academicTitle?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerCategory?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerFullName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerGrouping?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  industry?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
  isFemale?: DeserializedType<T, 'Edm.Boolean'> | null;
  isMale?: DeserializedType<T, 'Edm.Boolean'> | null;
  isNaturalPerson?: DeserializedType<T, 'Edm.String'> | null;
  isSexUnknown?: DeserializedType<T, 'Edm.Boolean'> | null;
  genderCodeName?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastChangeTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  legalForm?: DeserializedType<T, 'Edm.String'> | null;
  organizationBpName1?: DeserializedType<T, 'Edm.String'> | null;
  organizationBpName2?: DeserializedType<T, 'Edm.String'> | null;
  organizationBpName3?: DeserializedType<T, 'Edm.String'> | null;
  organizationBpName4?: DeserializedType<T, 'Edm.String'> | null;
  organizationFoundationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  organizationLiquidationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  searchTerm1?: DeserializedType<T, 'Edm.String'> | null;
  searchTerm2?: DeserializedType<T, 'Edm.String'> | null;
  additionalLastName?: DeserializedType<T, 'Edm.String'> | null;
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  businessPartnerBirthDateStatus?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerBirthplaceName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerDeathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  businessPartnerIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  businessPartnerType?: DeserializedType<T, 'Edm.String'> | null;
  eTag?: DeserializedType<T, 'Edm.String'> | null;
  groupBusinessPartnerName1?: DeserializedType<T, 'Edm.String'> | null;
  groupBusinessPartnerName2?: DeserializedType<T, 'Edm.String'> | null;
  independentAddressId?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  nameCountry?: DeserializedType<T, 'Edm.String'> | null;
  nameFormat?: DeserializedType<T, 'Edm.String'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  personNumber?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForArchiving?: DeserializedType<T, 'Edm.Boolean'> | null;
  businessPartnerIdByExtSystem?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerPrintFormat?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerOccupation?: DeserializedType<T, 'Edm.String'> | null;
  busPartMaritalStatus?: DeserializedType<T, 'Edm.String'> | null;
  busPartNationality?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerBirthName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerSupplementName?: DeserializedType<T, 'Edm.String'> | null;
  naturalPersonEmployerName?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  lastNameSecondPrefix?: DeserializedType<T, 'Edm.String'> | null;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  bpDataControllerIsNotRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  tradingPartner?: DeserializedType<T, 'Edm.String'> | null;
  toBpCreditWorthiness?: BpCreditWorthinessType<T> | null;
  toBpDataController: BpDataControllerType<T>[];
  toBpFinServicesReporting?: BpFinancialServicesReportingType<T> | null;
  toBpFiscalYearInformation: BpFiscalYearInformationType<T>[];
  toBpRelationship: BpRelationshipType<T>[];
  toBuPaIdentification: BuPaIdentificationType<T>[];
  toBuPaIndustry: BuPaIndustryType<T>[];
  toBusinessPartner?: BpFinancialServicesExtnType<T> | null;
  toBusinessPartnerAddress: BusinessPartnerAddressType<T>[];
  toBusinessPartnerBank: BusinessPartnerBankType<T>[];
  toBusinessPartnerContact: BusinessPartnerContactType<T>[];
  toBusinessPartnerRating: BusinessPartnerRatingType<T>[];
  toBusinessPartnerRole: BusinessPartnerRoleType<T>[];
  toBusinessPartnerTax: BusinessPartnerTaxNumberType<T>[];
  toBusPartAddrDepdntTaxNmbr: BusPartAddrDepdntTaxNmbrType<T>[];
  toCustomer?: CustomerType<T> | null;
  toPaymentCard: BusinessPartnerPaymentCardType<T>[];
  toSupplier?: SupplierType<T> | null;
}
