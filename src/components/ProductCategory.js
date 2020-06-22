import React from 'react';
import Product from "./Product";
import "./ProductCategory.css"



const productlist = [
    {
      imagesrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1586574260374",
      description: "Focus Music",
      title: "Iphone SE New",
      price: "480,00 Euro",
    },
    {
      imagesrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567808549969",
      title: "Iphone 11",
      price: "969,00 Euro",
    },
    {
      imagesrc:
        "https://images.samsung.com/is/image/samsung/de-galaxy-s20-g980fds-sm-g980fzadeub-Grey-211620895?$PD_GALLERY_PNG$",
      title: "Iphone X",
      price: "749,00 Euro",
    },
    {
      imagesrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1565209264208",
      title: "Samsung Galaxy S20",
      price: "169,00 Euro",
    },
  ];


class ProductCategory extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <section>
                <h1>{this.props.text}</h1>
                <div className="productlistContainer">
                    {productlist.map((product) => (
                    <Product
                        imagesrc={product.imagesrc}
                        title={product.title}
                        price={product.price}
                    />
                ))}
                </div>
            </section>
        )
    }
}

export default ProductCategory;