import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import shippingProduct from "./../../assets/shipping-icon.png";
import { searchProduct } from './../../services/connections';
import { sortResult } from './../../services/handlerServicesResponse/Interfaces/sortResult';
import { sortResultInterface } from './../../services/handlerServicesResponse/Interfaces/queryResultInterface';
import { sortCategories } from '../../helpers/sortCategories';
import "./QueryResult.scss";

const sortResultInitialState: sortResultInterface = {
  author: { name: "", lastname: "" },
  categories: [],
  items: [],
};

export const QueryResult = () => {
  const navigate = useNavigate();
  const [sortResultState, setSortResultState] = useState<sortResultInterface>(
    sortResultInitialState
  );

  let [searchParams] = useSearchParams();
  let productToSearch = searchParams.get("search");
  
  useEffect(() => {
    const search = async () => {
      const response = (await searchProduct(productToSearch as string)) as any;
      console.log("response",response);
      setSortResultState(sortResult(response));
    };

    search();
  }, []);

  const listProducts = () => {
    const productList = sortResultState.items.map(
      (item: any, index: any) =>
        index < 4 && (
          <div className="itemResultQuery" key={index} onClick={() => goProduct(item.id)}>
            <div className="row">
              <div className="col-md-3">
                <img src={item.picture} alt="Product" className="w-100 product" />
              </div>
              <div className="col-md-7">
                <div className="productPrice">
                  <p className="price">$ {item.price.amount}</p>
                  {item.free_shipping && (
                    <img src={shippingProduct} alt="Shipping" className="productShipping" />
                  )}
                </div>
                <div className="description">
                  <p>{item.title}</p>
                </div>
              </div>
              <div className="col-md-2">
                <p className="shortDescription">{item.price.currency}</p>
              </div>
            </div>
          </div>
        )
    );

    return <div>{productList}</div>;
  }

  const goProduct = (productId: string) => {
    navigate({
      pathname: "/items/" + productId,
    });
  };

  return (
    <div className="queryResultPage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="breadcrumb">{sortCategories(sortResultState)}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="whiteBack padding-16">
        {listProducts()}
        </div>
      </div>
    </div>
  );
};
