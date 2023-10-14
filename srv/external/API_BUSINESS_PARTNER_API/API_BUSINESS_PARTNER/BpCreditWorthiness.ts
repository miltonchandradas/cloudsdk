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
import type { BpCreditWorthinessApi } from './BpCreditWorthinessApi';

/**
 * This class represents the entity "A_BPCreditWorthiness" of service "API_BUSINESS_PARTNER".
 */
export class BpCreditWorthiness<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BpCreditWorthinessType<T>
{
  /**
   * Technical entity name for BpCreditWorthiness.
   */
  static _entityName = 'A_BPCreditWorthiness';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BpCreditWorthiness entity
   */
  static _keys = ['BusinessPartner'];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Standing.
   * Maximum length: 1.
   * @nullable
   */
  busPartCreditStanding?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status of Credit Standing Information.
   * Maximum length: 1.
   * @nullable
   */
  bpCreditStandingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Institute Providing Credit Standing Information.
   * Maximum length: 4.
   * @nullable
   */
  creditRatingAgency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Credit Standing Information.
   * Maximum length: 50.
   * @nullable
   */
  bpCreditStandingComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Credit Standing Information.
   * @nullable
   */
  bpCreditStandingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rating.
   * Maximum length: 3.
   * @nullable
   */
  bpCreditStandingRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status of Legal Proceedings.
   * Maximum length: 2.
   * @nullable
   */
  bpLegalProceedingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Initiation of Legal Proceedings.
   * @nullable
   */
  bpLglProceedingInitiationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Affidavit.
   * @nullable
   */
  businessPartnerIsUnderOath?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Date of affidavit.
   * @nullable
   */
  businessPartnerOathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Launch Bankruptcy Proceedings.
   * @nullable
   */
  businessPartnerIsBankrupt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Commencement Date of Bankruptcy Proceedings.
   * @nullable
   */
  businessPartnerBankruptcyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Foreclosure.
   * @nullable
   */
  bpForeclosureIsInitiated?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Date of foreclosure.
   * @nullable
   */
  bpForeclosureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Bp Crdt Wrthnss Access Chk Is Active.
   * Maximum length: 1.
   * @nullable
   */
  bpCrdtWrthnssAccessChkIsActive?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BpCreditWorthinessApi<T>) {
    super(_entityApi);
  }
}

export interface BpCreditWorthinessType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  busPartCreditStanding?: DeserializedType<T, 'Edm.String'> | null;
  bpCreditStandingStatus?: DeserializedType<T, 'Edm.String'> | null;
  creditRatingAgency?: DeserializedType<T, 'Edm.String'> | null;
  bpCreditStandingComment?: DeserializedType<T, 'Edm.String'> | null;
  bpCreditStandingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpCreditStandingRating?: DeserializedType<T, 'Edm.String'> | null;
  bpLegalProceedingStatus?: DeserializedType<T, 'Edm.String'> | null;
  bpLglProceedingInitiationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  businessPartnerIsUnderOath?: DeserializedType<T, 'Edm.Boolean'> | null;
  businessPartnerOathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  businessPartnerIsBankrupt?: DeserializedType<T, 'Edm.Boolean'> | null;
  businessPartnerBankruptcyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpForeclosureIsInitiated?: DeserializedType<T, 'Edm.Boolean'> | null;
  bpForeclosureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpCrdtWrthnssAccessChkIsActive?: DeserializedType<T, 'Edm.String'> | null;
}
