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
import type { CustAddrDepdntInformationApi } from './CustAddrDepdntInformationApi';
/**
 * This class represents the entity "A_CustAddrDepdntInformation" of service "API_BUSINESS_PARTNER".
 */
export declare class CustAddrDepdntInformation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustAddrDepdntInformationType<T>
{
  readonly _entityApi: CustAddrDepdntInformationApi<T>;
  /**
   * Technical entity name for CustAddrDepdntInformation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the CustAddrDepdntInformation entity
   */
  static _keys: string[];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Express train station.
   * Maximum length: 25.
   * @nullable
   */
  expressTrainStationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Train station.
   * Maximum length: 25.
   * @nullable
   */
  trainStationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Code.
   * Maximum length: 4.
   * @nullable
   */
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Code.
   * Maximum length: 3.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: CustAddrDepdntInformationApi<T>);
}
export interface CustAddrDepdntInformationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  expressTrainStationName?: DeserializedType<T, 'Edm.String'> | null;
  trainStationName?: DeserializedType<T, 'Edm.String'> | null;
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
}
