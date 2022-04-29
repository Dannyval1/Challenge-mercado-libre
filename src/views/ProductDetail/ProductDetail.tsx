import "./ProductDetail.scss";
import largeProduct from './../../assets/alfombra.jpg';

export const ProductDetail = () => {

  return (
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="breadcrumb">Excelente / Bueno / Aceptable</p>
          </div>
        </div>
        <div className="whiteBack general-padding-32 border-radius-5">
          <div className="row">
            <div className="col-md-8">
              <img
                src={largeProduct}
                alt="itemProduct"
                className="largeImageProduct"
              />
              <div className="infoProduct">
                <h3>Descripción del producto</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <p className="shortDescription">NUEVO - 234 vendidos</p>
              <p className="largeDescription">Deco Reverse Sombre Oxford</p>
              <p className="largePrice">$ 1.980</p>
              <button className="btn btn-primary btn-meli">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
