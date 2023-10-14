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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BpDataController } from './BpDataController';
/**
 * Request builder class for operations supported on the {@link BpDataController} entity.
 */
export declare class BpDataControllerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpDataController<T>, T> {
  /**
   * Returns a request builder for retrieving one `BpDataController` entity based on its keys.
   * @param businessPartner Key property. See {@link BpDataController.businessPartner}.
   * @param dataController Key property. See {@link BpDataController.dataController}.
   * @param purposeForPersonalData Key property. See {@link BpDataController.purposeForPersonalData}.
   * @returns A request builder for creating requests to retrieve one `BpDataController` entity based on its keys.
   */
  getByKey(
    businessPartner: DeserializedType<T, 'Edm.String'>,
    dataController: DeserializedType<T, 'Edm.String'>,
    purposeForPersonalData: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BpDataController<T>, T>;
  /**
   * Returns a request builder for querying all `BpDataController` entities.
   * @returns A request builder for creating requests to retrieve all `BpDataController` entities.
   */
  getAll(): GetAllRequestBuilder<BpDataController<T>, T>;
  /**
   * Returns a request builder for creating a `BpDataController` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpDataController`.
   */
  create(
    entity: BpDataController<T>
  ): CreateRequestBuilder<BpDataController<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BpDataController`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpDataController`.
   */
  update(
    entity: BpDataController<T>
  ): UpdateRequestBuilder<BpDataController<T>, T>;
}
