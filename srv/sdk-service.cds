@path: 'service/sdk'
service SDKService {
    type Products {
        ID          : Integer;
        Name        : String;
        Description : String;
        Rating      : Integer;
        Price       : Double;
    }

    function getNorthwindProducts() returns array of Products;
}
