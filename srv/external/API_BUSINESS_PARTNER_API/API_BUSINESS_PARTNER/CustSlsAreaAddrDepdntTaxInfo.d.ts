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
import type { CustSlsAreaAddrDepdntTaxInfoApi } from './CustSlsAreaAddrDepdntTaxInfoApi';
/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntTaxInfo" of service "API_BUSINESS_PARTNER".
 */
export declare class CustSlsAreaAddrDepdntTaxInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustSlsAreaAddrDepdntTaxInfoType<T>
{
  readonly _entityApi: CustSlsAreaAddrDepdntTaxInfoApi<T>;
  /**
   * Technical entity name for CustSlsAreaAddrDepdntTaxInfo.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the CustSlsAreaAddrDepdntTaxInfo entity
   */
  static _keys: string[];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference distrib.channel for cust.and material masters.
   * Maximum length: 2.
   */
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  /**
   * Division.
   * Maximum length: 2.
   */
  division: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Departure Country/Region (from which the goods are sent).
   * Maximum length: 3.
   */
  departureCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Condition Type (Sales Tax, Value-Added Tax,...).
   * Maximum length: 4.
   */
  customerTaxCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax classification for customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: CustSlsAreaAddrDepdntTaxInfoApi<T>);
}
export interface CustSlsAreaAddrDepdntTaxInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  division: DeserializedType<T, 'Edm.String'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  departureCountry: DeserializedType<T, 'Edm.String'>;
  customerTaxCategory: DeserializedType<T, 'Edm.String'>;
  customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
}
