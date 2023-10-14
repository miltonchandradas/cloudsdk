/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusPartAddrDepdntTaxNmbr } from './BusPartAddrDepdntTaxNmbr';
import { BusPartAddrDepdntTaxNmbrRequestBuilder } from './BusPartAddrDepdntTaxNmbrRequestBuilder';
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
export declare class BusPartAddrDepdntTaxNmbrApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusPartAddrDepdntTaxNmbr<DeSerializersT>, DeSerializersT>
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
  ): BusPartAddrDepdntTaxNmbrApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BusPartAddrDepdntTaxNmbr;
  requestBuilder(): BusPartAddrDepdntTaxNmbrRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusPartAddrDepdntTaxNmbr<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusPartAddrDepdntTaxNmbr<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusPartAddrDepdntTaxNmbr,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    BUSINESS_PARTNER: OrderableEdmTypeField<
      BusPartAddrDepdntTaxNmbr<
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
      BusPartAddrDepdntTaxNmbr<
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
    BP_TAX_TYPE: OrderableEdmTypeField<
      BusPartAddrDepdntTaxNmbr<
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
    BP_TAX_NUMBER: OrderableEdmTypeField<
      BusPartAddrDepdntTaxNmbr<
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
    BP_TAX_LONG_NUMBER: OrderableEdmTypeField<
      BusPartAddrDepdntTaxNmbr<
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
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      BusPartAddrDepdntTaxNmbr<
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
      BusPartAddrDepdntTaxNmbr<
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
