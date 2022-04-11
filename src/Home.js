import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="2021 Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver"
            price={194999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61cCf94xIEL._SL1500_.jpg"
          />
          <Product
            id="12321341"
            title="realme narzo 50A (Oxygen Green , 4GB RAM + 64 GB Storage) Helio G85 Processor | 50MP AI Triple Camera | 6000 mAh Battery       "
            price={17999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61fD6jYG-fL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="12321341"
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={799}
            rating={5}
            image="https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
          />
          <Product
            id="12321341"
            title="(Renewed) Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes, Heart Rate Tracking and 100+ Cloud Watch Faces, 7 Days of extensive Battery - (Rose Gold)"
            price={2799}
            rating={1}
            image="https://m.media-amazon.com/images/I/616NaqQIeKL._SL1500_.jpg"
          />
          <Product
            id="12321341"
            title="LG Ultragear 60 cm (24 inches) 144Hz, Native 1ms Full HD Gaming Monitor with Radeon Freesync - TN Panel with Display Port, HDMI, Height Adjust"
            price={13799}
            rating={2}
            image="https://m.media-amazon.com/images/I/51mQ9zqG4fL._AC_SX615_SY462_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="12321341"
            title="Bigmuscles Nutrition Premium Gold Whey 1Kg Whey Protein Isolate Blend, Labdoor USA certified, 25g Protein Per Serving [Belgian chocolate]"
            price={1499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Tusla5Y9L._SL1200_.jpg"
          />
        <Product
            id="12321341"
            title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA (Black) (2021 Model)"
            price={39799}
            rating={5}
            image="https://m.media-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
