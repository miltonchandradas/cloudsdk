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
import type { BpDataControllerApi } from './BpDataControllerApi';
/**
 * This class represents the entity "A_BPDataController" of service "API_BUSINESS_PARTNER".
 */
export declare class BpDataController<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BpDataControllerType<T>
{
  readonly _entityApi: BpDataControllerApi<T>;
  /**
   * Technical entity name for BpDataController.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BpDataController entity
   */
  static _keys: string[];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * BP: Data Controller.
   * Maximum length: 30.
   */
  dataController: DeserializedType<T, 'Edm.String'>;
  /**
   * BP: Purpose.
   * Maximum length: 30.
   */
  purposeForPersonalData: DeserializedType<T, 'Edm.String'>;
  /**
   * BP: Data Controller Purpose Assignment Status.
   * Maximum length: 1.
   * @nullable
   */
  dataControlAssignmentStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP: Derivation Indicator for Data Controller (DC).
   * Maximum length: 1.
   * @nullable
   */
  bpDataControllerIsDerived?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP: Derivation Indicator for Purpose.
   * Maximum length: 1.
   * @nullable
   */
  purposeDerived?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP: Purpose Type.
   * Maximum length: 1.
   * @nullable
   */
  purposeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Purpose Completed Flag.
   * Maximum length: 1.
   * @nullable
   */
  businessPurposeFlag?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: BpDataControllerApi<T>);
}
export interface BpDataControllerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  dataController: DeserializedType<T, 'Edm.String'>;
  purposeForPersonalData: DeserializedType<T, 'Edm.String'>;
  dataControlAssignmentStatus?: DeserializedType<T, 'Edm.String'> | null;
  bpDataControllerIsDerived?: DeserializedType<T, 'Edm.String'> | null;
  purposeDerived?: DeserializedType<T, 'Edm.String'> | null;
  purposeType?: DeserializedType<T, 'Edm.String'> | null;
  businessPurposeFlag?: DeserializedType<T, 'Edm.String'> | null;
}
