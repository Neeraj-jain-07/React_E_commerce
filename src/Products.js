import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";


const Products = () => {
  
  return <Wrapper>
    <div className="container grid grid-filter-column">
        <div>
          {/* filtersection */}
          <FilterSection />
        </div>
        <section className="product-view--sort">
           <div className="sort-filter">
            {/* sort */}
            <Sort/>
           </div>
           <div className="main-product">
            {/* productList */}
            <ProductList />
           </div>
        </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    gap:20px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width:970px) {
    .grid-filter-column {
      gap:0px;
    }
  }
`;

export default Products;
