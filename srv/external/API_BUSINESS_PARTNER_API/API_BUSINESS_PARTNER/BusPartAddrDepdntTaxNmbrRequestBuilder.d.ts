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
import { BusPartAddrDepdntTaxNmbr } from './BusPartAddrDepdntTaxNmbr';
/**
 * Request builder class for operations supported on the {@link BusPartAddrDepdntTaxNmbr} entity.
 */
export declare class BusPartAddrDepdntTaxNmbrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T> {
  /**
   * Returns a request builder for retrieving one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
   * @param businessPartner Key property. See {@link BusPartAddrDepdntTaxNmbr.businessPartner}.
   * @param addressId Key property. See {@link BusPartAddrDepdntTaxNmbr.addressId}.
   * @param bpTaxType Key property. See {@link BusPartAddrDepdntTaxNmbr.bpTaxType}.
   * @returns A request builder for creating requests to retrieve one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
   */
  getByKey(
    businessPartner: DeserializedType<T, 'Edm.String'>,
    addressId: DeserializedType<T, 'Edm.String'>,
    bpTaxType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
  /**
   * Returns a request builder for querying all `BusPartAddrDepdntTaxNmbr` entities.
   * @returns A request builder for creating requests to retrieve all `BusPartAddrDepdntTaxNmbr` entities.
   */
  getAll(): GetAllRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
  /**
   * Returns a request builder for creating a `BusPartAddrDepdntTaxNmbr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusPartAddrDepdntTaxNmbr`.
   */
  create(
    entity: BusPartAddrDepdntTaxNmbr<T>
  ): CreateRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusPartAddrDepdntTaxNmbr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusPartAddrDepdntTaxNmbr`.
   */
  update(
    entity: BusPartAddrDepdntTaxNmbr<T>
  ): UpdateRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusPartAddrDepdntTaxNmbr`.
   * @param businessPartner Key property. See {@link BusPartAddrDepdntTaxNmbr.businessPartner}.
   * @param addressId Key property. See {@link BusPartAddrDepdntTaxNmbr.addressId}.
   * @param bpTaxType Key property. See {@link BusPartAddrDepdntTaxNmbr.bpTaxType}.
   * @returns A request builder for creating requests that delete an entity of type `BusPartAddrDepdntTaxNmbr`.
   */
  delete(
    businessPartner: string,
    addressId: string,
    bpTaxType: string
  ): DeleteRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusPartAddrDepdntTaxNmbr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusPartAddrDepdntTaxNmbr` by taking the entity as a parameter.
   */
  delete(
    entity: BusPartAddrDepdntTaxNmbr<T>
  ): DeleteRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
}
