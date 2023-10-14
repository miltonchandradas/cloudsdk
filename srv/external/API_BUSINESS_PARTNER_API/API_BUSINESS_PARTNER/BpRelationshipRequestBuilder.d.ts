/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BpRelationship } from './BpRelationship';
/**
 * Request builder class for operations supported on the {@link BpRelationship} entity.
 */
export declare class BpRelationshipRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpRelationship<T>, T> {
  /**
   * Returns a request builder for retrieving one `BpRelationship` entity based on its keys.
   * @param relationshipNumber Key property. See {@link BpRelationship.relationshipNumber}.
   * @param businessPartner1 Key property. See {@link BpRelationship.businessPartner1}.
   * @param businessPartner2 Key property. See {@link BpRelationship.businessPartner2}.
   * @param validityEndDate Key property. See {@link BpRelationship.validityEndDate}.
   * @returns A request builder for creating requests to retrieve one `BpRelationship` entity based on its keys.
   */
  getByKey(
    relationshipNumber: DeserializedType<T, 'Edm.String'>,
    businessPartner1: DeserializedType<T, 'Edm.String'>,
    businessPartner2: DeserializedType<T, 'Edm.String'>,
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>
  ): GetByKeyRequestBuilder<BpRelationship<T>, T>;
  /**
   * Returns a request builder for querying all `BpRelationship` entities.
   * @returns A request builder for creating requests to retrieve all `BpRelationship` entities.
   */
  getAll(): GetAllRequestBuilder<BpRelationship<T>, T>;
  /**
   * Returns a request builder for creating a `BpRelationship` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpRelationship`.
   */
  create(entity: BpRelationship<T>): CreateRequestBuilder<BpRelationship<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BpRelationship`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpRelationship`.
   */
  update(entity: BpRelationship<T>): UpdateRequestBuilder<BpRelationship<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpRelationship`.
   * @param relationshipNumber Key property. See {@link BpRelationship.relationshipNumber}.
   * @param businessPartner1 Key property. See {@link BpRelationship.businessPartner1}.
   * @param businessPartner2 Key property. See {@link BpRelationship.businessPartner2}.
   * @param validityEndDate Key property. See {@link BpRelationship.validityEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `BpRelationship`.
   */
  delete(
    relationshipNumber: string,
    businessPartner1: string,
    businessPartner2: string,
    validityEndDate: Moment
  ): DeleteRequestBuilder<BpRelationship<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpRelationship`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpRelationship` by taking the entity as a parameter.
   */
  delete(entity: BpRelationship<T>): DeleteRequestBuilder<BpRelationship<T>, T>;
}
