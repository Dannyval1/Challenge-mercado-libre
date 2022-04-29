import product from "./../../assets/alfombra.jpg";
import shippingProduct from "./../../assets/shipping-icon.png";
import "./QueryResult.scss";

export const QueryResult = () => {
  return (
    <div className="queryResultPage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="breadcrumb">Excelente / Bueno / Aceptable</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="whiteBack padding-16">
          <div className="itemResultQuery">
            <div className="row">
              <div className="col-md-3">
                <img src={product} alt="Product" className="w-100 product" />
              </div>
              <div className="col-md-7">
                <div className="productPrice">
                  <p className="price">$ 1.980</p>
                  <img src={shippingProduct} alt="Shipping" className="productShipping" />
                </div>
                <div className="description">
                  <p>Apple IPod Touch 6GB 16GB Negro igual a nuevo</p>
                </div>
              </div>
              <div className="col-md-2">
                <p className="shortDescription">Capital Federal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
