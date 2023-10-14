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
import { CustAddrDepdntInformation } from './CustAddrDepdntInformation';
/**
 * Request builder class for operations supported on the {@link CustAddrDepdntInformation} entity.
 */
export declare class CustAddrDepdntInformationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustAddrDepdntInformation<T>, T> {
  /**
   * Returns a request builder for retrieving one `CustAddrDepdntInformation` entity based on its keys.
   * @param customer Key property. See {@link CustAddrDepdntInformation.customer}.
   * @param addressId Key property. See {@link CustAddrDepdntInformation.addressId}.
   * @returns A request builder for creating requests to retrieve one `CustAddrDepdntInformation` entity based on its keys.
   */
  getByKey(
    customer: DeserializedType<T, 'Edm.String'>,
    addressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustAddrDepdntInformation<T>, T>;
  /**
   * Returns a request builder for querying all `CustAddrDepdntInformation` entities.
   * @returns A request builder for creating requests to retrieve all `CustAddrDepdntInformation` entities.
   */
  getAll(): GetAllRequestBuilder<CustAddrDepdntInformation<T>, T>;
  /**
   * Returns a request builder for creating a `CustAddrDepdntInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntInformation`.
   */
  create(
    entity: CustAddrDepdntInformation<T>
  ): CreateRequestBuilder<CustAddrDepdntInformation<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `CustAddrDepdntInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntInformation`.
   */
  update(
    entity: CustAddrDepdntInformation<T>
  ): UpdateRequestBuilder<CustAddrDepdntInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustAddrDepdntInformation`.
   * @param customer Key property. See {@link CustAddrDepdntInformation.customer}.
   * @param addressId Key property. See {@link CustAddrDepdntInformation.addressId}.
   * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntInformation`.
   */
  delete(
    customer: string,
    addressId: string
  ): DeleteRequestBuilder<CustAddrDepdntInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustAddrDepdntInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntInformation` by taking the entity as a parameter.
   */
  delete(
    entity: CustAddrDepdntInformation<T>
  ): DeleteRequestBuilder<CustAddrDepdntInformation<T>, T>;
}
