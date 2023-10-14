/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BpFiscalYearInformation } from './BpFiscalYearInformation';
/**
 * Request builder class for operations supported on the {@link BpFiscalYearInformation} entity.
 */
export declare class BpFiscalYearInformationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpFiscalYearInformation<T>, T> {
  /**
   * Returns a request builder for retrieving one `BpFiscalYearInformation` entity based on its keys.
   * @param businessPartner Key property. See {@link BpFiscalYearInformation.businessPartner}.
   * @param businessPartnerFiscalYear Key property. See {@link BpFiscalYearInformation.businessPartnerFiscalYear}.
   * @returns A request builder for creating requests to retrieve one `BpFiscalYearInformation` entity based on its keys.
   */
  getByKey(
    businessPartner: DeserializedType<T, 'Edm.String'>,
    businessPartnerFiscalYear: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BpFiscalYearInformation<T>, T>;
  /**
   * Returns a request builder for querying all `BpFiscalYearInformation` entities.
   * @returns A request builder for creating requests to retrieve all `BpFiscalYearInformation` entities.
   */
  getAll(): GetAllRequestBuilder<BpFiscalYearInformation<T>, T>;
  /**
   * Returns a request builder for creating a `BpFiscalYearInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpFiscalYearInformation`.
   */
  create(
    entity: BpFiscalYearInformation<T>
  ): CreateRequestBuilder<BpFiscalYearInformation<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BpFiscalYearInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpFiscalYearInformation`.
   */
  update(
    entity: BpFiscalYearInformation<T>
  ): UpdateRequestBuilder<BpFiscalYearInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpFiscalYearInformation`.
   * @param businessPartner Key property. See {@link BpFiscalYearInformation.businessPartner}.
   * @param businessPartnerFiscalYear Key property. See {@link BpFiscalYearInformation.businessPartnerFiscalYear}.
   * @returns A request builder for creating requests that delete an entity of type `BpFiscalYearInformation`.
   */
  delete(
    businessPartner: string,
    businessPartnerFiscalYear: string
  ): DeleteRequestBuilder<BpFiscalYearInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpFiscalYearInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpFiscalYearInformation` by taking the entity as a parameter.
   */
  delete(
    entity: BpFiscalYearInformation<T>
  ): DeleteRequestBuilder<BpFiscalYearInformation<T>, T>;
}
