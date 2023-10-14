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
import { BpFinancialServicesReporting } from './BpFinancialServicesReporting';

/**
 * Request builder class for operations supported on the {@link BpFinancialServicesReporting} entity.
 */
export class BpFinancialServicesReportingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpFinancialServicesReporting<T>, T> {
  /**
   * Returns a request builder for retrieving one `BpFinancialServicesReporting` entity based on its keys.
   * @param businessPartner Key property. See {@link BpFinancialServicesReporting.businessPartner}.
   * @returns A request builder for creating requests to retrieve one `BpFinancialServicesReporting` entity based on its keys.
   */
  getByKey(
    businessPartner: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BpFinancialServicesReporting<T>, T> {
    return new GetByKeyRequestBuilder<BpFinancialServicesReporting<T>, T>(
      this.entityApi,
      { BusinessPartner: businessPartner }
    );
  }

  /**
   * Returns a request builder for querying all `BpFinancialServicesReporting` entities.
   * @returns A request builder for creating requests to retrieve all `BpFinancialServicesReporting` entities.
   */
  getAll(): GetAllRequestBuilder<BpFinancialServicesReporting<T>, T> {
    return new GetAllRequestBuilder<BpFinancialServicesReporting<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BpFinancialServicesReporting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpFinancialServicesReporting`.
   */
  create(
    entity: BpFinancialServicesReporting<T>
  ): CreateRequestBuilder<BpFinancialServicesReporting<T>, T> {
    return new CreateRequestBuilder<BpFinancialServicesReporting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BpFinancialServicesReporting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpFinancialServicesReporting`.
   */
  update(
    entity: BpFinancialServicesReporting<T>
  ): UpdateRequestBuilder<BpFinancialServicesReporting<T>, T> {
    return new UpdateRequestBuilder<BpFinancialServicesReporting<T>, T>(
      this.entityApi,
      entity
    );
  }
}
