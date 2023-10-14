/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpAddrDepdntIntlLocNumber } from './BpAddrDepdntIntlLocNumber';
import { BpAddrDepdntIntlLocNumberRequestBuilder } from './BpAddrDepdntIntlLocNumberRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class BpAddrDepdntIntlLocNumberApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BpAddrDepdntIntlLocNumber<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): BpAddrDepdntIntlLocNumberApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BpAddrDepdntIntlLocNumber;
  requestBuilder(): BpAddrDepdntIntlLocNumberRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BpAddrDepdntIntlLocNumber<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BpAddrDepdntIntlLocNumber<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BpAddrDepdntIntlLocNumber,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    BUSINESS_PARTNER: OrderableEdmTypeField<
      BpAddrDepdntIntlLocNumber<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_ID: OrderableEdmTypeField<
      BpAddrDepdntIntlLocNumber<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNATIONAL_LOCATION_NUMBER_1: OrderableEdmTypeField<
      BpAddrDepdntIntlLocNumber<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_LOCATION_NUMBER_2: OrderableEdmTypeField<
      BpAddrDepdntIntlLocNumber<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_LOCATION_NUMBER_3: OrderableEdmTypeField<
      BpAddrDepdntIntlLocNumber<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      BpAddrDepdntIntlLocNumber<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
