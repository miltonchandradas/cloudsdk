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
import { CustUnldgPtAddrDepdntInfo } from './CustUnldgPtAddrDepdntInfo';
/**
 * Request builder class for operations supported on the {@link CustUnldgPtAddrDepdntInfo} entity.
 */
export declare class CustUnldgPtAddrDepdntInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
   * @param customer Key property. See {@link CustUnldgPtAddrDepdntInfo.customer}.
   * @param addressId Key property. See {@link CustUnldgPtAddrDepdntInfo.addressId}.
   * @param unloadingPointName Key property. See {@link CustUnldgPtAddrDepdntInfo.unloadingPointName}.
   * @returns A request builder for creating requests to retrieve one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
   */
  getByKey(
    customer: DeserializedType<T, 'Edm.String'>,
    addressId: DeserializedType<T, 'Edm.String'>,
    unloadingPointName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
  /**
   * Returns a request builder for querying all `CustUnldgPtAddrDepdntInfo` entities.
   * @returns A request builder for creating requests to retrieve all `CustUnldgPtAddrDepdntInfo` entities.
   */
  getAll(): GetAllRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
  /**
   * Returns a request builder for creating a `CustUnldgPtAddrDepdntInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustUnldgPtAddrDepdntInfo`.
   */
  create(
    entity: CustUnldgPtAddrDepdntInfo<T>
  ): CreateRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `CustUnldgPtAddrDepdntInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustUnldgPtAddrDepdntInfo`.
   */
  update(
    entity: CustUnldgPtAddrDepdntInfo<T>
  ): UpdateRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustUnldgPtAddrDepdntInfo`.
   * @param customer Key property. See {@link CustUnldgPtAddrDepdntInfo.customer}.
   * @param addressId Key property. See {@link CustUnldgPtAddrDepdntInfo.addressId}.
   * @param unloadingPointName Key property. See {@link CustUnldgPtAddrDepdntInfo.unloadingPointName}.
   * @returns A request builder for creating requests that delete an entity of type `CustUnldgPtAddrDepdntInfo`.
   */
  delete(
    customer: string,
    addressId: string,
    unloadingPointName: string
  ): DeleteRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustUnldgPtAddrDepdntInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustUnldgPtAddrDepdntInfo` by taking the entity as a parameter.
   */
  delete(
    entity: CustUnldgPtAddrDepdntInfo<T>
  ): DeleteRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
}
