/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerSalesAreaTax } from './CustomerSalesAreaTax';
import { CustomerSalesAreaTaxRequestBuilder } from './CustomerSalesAreaTaxRequestBuilder';
import { CustSlsAreaAddrDepdntTaxInfoApi } from './CustSlsAreaAddrDepdntTaxInfoApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class CustomerSalesAreaTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerSalesAreaTax<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): CustomerSalesAreaTaxApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [CustSlsAreaAddrDepdntTaxInfoApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof CustomerSalesAreaTax;
  requestBuilder(): CustomerSalesAreaTaxRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CustomerSalesAreaTax<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    CustomerSalesAreaTax<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof CustomerSalesAreaTax, DeSerializersT>;
  private _schema?;
  get schema(): {
    CUSTOMER: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    SALES_ORGANIZATION: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    DISTRIBUTION_CHANNEL: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    DIVISION: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    DEPARTURE_COUNTRY: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    CUSTOMER_TAX_CATEGORY: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    CUSTOMER_TAX_CLASSIFICATION: OrderableEdmTypeField<
      CustomerSalesAreaTax<
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
    /**
     * Static representation of the one-to-many navigation property {@link toSlsAreaAddrDepdntTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SLS_AREA_ADDR_DEPDNT_TAX: Link<
      CustomerSalesAreaTax<DeSerializersT>,
      DeSerializersT,
      CustSlsAreaAddrDepdntTaxInfoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CustomerSalesAreaTax<
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
