import React from 'react';
import { Link } from 'react-router-dom';

export default function Divtechmode() {
  return (
    <div className="container">
      <h4 className="mb-4"><b>Fashions</b></h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {fashionItems.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top sizeimagecard" alt={item.title} />
              <Link to={item.link} className="btn">
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </Link>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className="text-body-secondary"><b>Rating:</b> {item.rating}</span>
                <span><b>Rupees ₹ {item.price}</b></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const fashionItems = [
  {
    image: "https://images-cdn.ubuy.co.in/6356cccbe135f6168958b686-ililily-landscape-square-embroidery.jpg",
    title: "Hat",
    link: "/hat",
    rating: "⭐⭐⭐⭐✰",
    price: 699
  },
  {
    image: "https://m.media-amazon.com/images/I/61f7FgFNmAL._SL1500_.jpg",
    title: "Flip Flop",
    link: "/flipflop",
    rating: "⭐⭐⭐⭐✰",
    price: 599
  },
  {
    image: "https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(500,630)",
    title: "Shoes",
    link: "/shoes",
    rating: "⭐⭐⭐⭐✰",
    price: 499
  },
  {
    image: "https://5.imimg.com/data5/HI/EC/AN/SELLER-27993559/wayfarer-goggles.jpg",
    title: "Goggles",
    link: "/goggles",
    rating: "⭐⭐⭐⭐✰",
    price: 399
  },
  {
    image: "https://media.istockphoto.com/id/507024876/vector/set-of-cosmetics-with-black-bag-on-isolated-background.jpg?s=612x612&w=0&k=20&c=pmtz3OTRn0hee6nIDJNq9wPdFL_ni3q2CYEjqSJTYYk=",
    title: "Makeup Kit",
    link: "/makupkits",
    rating: "⭐⭐⭐⭐✰",
    price: 399
  },
  {
    image: "https://www.promotionalwears.com/image/cache/catalog/data/key-chain-new/pkc/pkc504-simple-bar-shape-keychain-750x750.jpg",
    title: "Keychains",
    link: "/Keycains",
    rating: "⭐⭐⭐⭐✰",
    price: 599
  },
  {
    image: "https://hivagi.in/cdn/shop/products/1_96669279-f309-4cdc-af9c-bbc34998f77d.jpg?v=1676738986",
    title: "Showpiece",
    link: "/showpiece",
    rating: "⭐⭐⭐⭐✰",
    price: 399
  },
  {
    image: "https://hooke.ca/cdn/shop/files/HOOKE-WOMEN-LANDSCAPE-HOODIE-OAT-1.webp?v=1689794035&width=2500",
    title: "Sweaters",
    link: "/swetors",
    rating: "⭐⭐⭐⭐✰",
    price: 499
  }
];
