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
import type { BpAddrDepdntIntlLocNumberApi } from './BpAddrDepdntIntlLocNumberApi';
/**
 * This class represents the entity "A_BPAddrDepdntIntlLocNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class BpAddrDepdntIntlLocNumber<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BpAddrDepdntIntlLocNumberType<T>
{
  readonly _entityApi: BpAddrDepdntIntlLocNumberApi<T>;
  /**
   * Technical entity name for BpAddrDepdntIntlLocNumber.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BpAddrDepdntIntlLocNumber entity
   */
  static _keys: string[];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId: DeserializedType<T, 'Edm.String'>;
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
   * Check digit for the international location number.
   * Maximum length: 1.
   * @nullable
   */
  internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: BpAddrDepdntIntlLocNumberApi<T>);
}
export interface BpAddrDepdntIntlLocNumberType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
}
