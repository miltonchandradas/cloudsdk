using {sdk} from '../db/schema';

@path: 'service/sdk'
service SDKService {

    @readonly
    entity BusinessPartners as projection on sdk.BusinessPartners;

    type Product {
        ID          : Integer;
        Name        : String;
        Description : String;
        Rating      : Integer;
        Price       : Decimal;
    }

    function getNorthwindProducts()                                                                                    returns array of Product;
    action   addNorthwindProduct(ID : Integer, Name : String, Description : String, Rating : Integer, Price : Decimal) returns Product;
    function batchOperationsBP()                                                                                       returns String;
}
