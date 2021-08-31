import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


// function fu(){
//   var a = anime({
//       targets: '#root > div > div.ui.grid.container > div:nth-child(1) > a > div > div',
//       rotate :1080,
//       easing: 'easeInOutCubic',
//       loop:2,
//     });
//     console.log('hi')
//   }

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four "  key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            
          
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>{renderList}</>
  );
  
};

export default ProductComponent;
