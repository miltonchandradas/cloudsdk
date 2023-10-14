@path: 'service/sdk'
service SDKService {
    type Product {
        ID          : Integer;
        Name        : String;
        Description : String;
        Rating      : Integer;
        Price       : Decimal;
    }

    function getNorthwindProducts() returns array of Product;
}
