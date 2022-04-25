import React, { useState, useEffect } from 'react';
import './Slider.css';
import { getNikeShoe } from './Services/ProductoPopularServices';
import ProductoPopular from './ProductoPopular';

import Glide from '@glidejs/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
// import "@glidejs/glide/dist/css/glide.theme.min.css";

function Slider() {

  useEffect(() => {
    const config = {
      startAt: 0,
      perView: 3,
      bound: true,
      rewind: false
      // autoplay: 2000,
      // type: 'carousel'
    };
    const mainGlide = new Glide('.glide', config);
    mainGlide.mount();
    return () => mainGlide.destroy();
  }, []);

  // Air Max
  const [buscarAirMax, setBuscarAirMax] = useState("MLA1128162407");
  const [responseAirMax, setResponseAirMax] = useState({});
  const requestAirMax = async () => {
    const responseAirMax = await getNikeShoe(buscarAirMax);
    setResponseAirMax(responseAirMax.data);
  }
  requestAirMax();

  // Crater Impact
  const [buscarCraterImpact, setBuscarCraterImpact] = useState("MLA1114254646");
  const [responseCraterImpact, setResponseCraterImpact] = useState({});
  const requestCraterImpact = async () => {
    const responseCraterImpact = await getNikeShoe(buscarCraterImpact);
    setResponseCraterImpact(responseCraterImpact.data);
  }
  requestCraterImpact();

  // Waffle One Crater
  const [buscarWaffleOneCrater, setBuscarWaffleOneCrater] = useState("MLA1132596113");
  const [responseWaffleOneCrater, setResponseWaffleOneCrater] = useState({});
  const requestWaffleOneCrater = async () => {
    const responseWaffleOneCrater = await getNikeShoe(buscarWaffleOneCrater);
    setResponseWaffleOneCrater(responseWaffleOneCrater.data);
  }
  requestWaffleOneCrater();

  // Gts 97
  const [buscarGts97, setBuscarGts97] = useState("MLA1129812506");
  const [responseGts97, setResponseGts97] = useState({});
  const requestGts97 = async () => {
    const responseGts97 = await getNikeShoe(buscarGts97);
    setResponseGts97(responseGts97.data);
  }
  requestGts97();

  // Air Jordan 1 Retro
  const [buscarAirJordan1Retro, setBuscarAirJordan1Retro] = useState("MLA1121217290");
  const [responseAirJordan1Retro, setResponseAirJordan1Retro] = useState({});
  const requestAirJordan1Retro = async () => {
    const responseAirJordan1Retro = await getNikeShoe(buscarAirJordan1Retro);
    setResponseAirJordan1Retro(responseAirJordan1Retro.data);
  }
  requestAirJordan1Retro();
  
  return(
    <>
    <div className="slider__container">
      {/* Glide Container start */}
      <div class="glide">
  
        {/* Glide Arrows start */}
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
        {/* Glide Arrows end */}
  
        {/* Glide Track start */}
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <ProductoPopular 
                imagen={responseAirMax?.thumbnail}
                nombre={responseAirMax?.title}
                precio={responseAirMax?.price}
              />
            </li>
            <li class="glide__slide">
              <ProductoPopular 
                imagen={responseCraterImpact?.thumbnail}
                nombre={responseCraterImpact?.title}
                precio={responseCraterImpact?.price}
              />
            </li>
            <li class="glide__slide">
              <ProductoPopular 
                imagen={responseWaffleOneCrater?.thumbnail}
                nombre={responseWaffleOneCrater?.title}
                precio={responseWaffleOneCrater?.price}
              />
            </li>
            <li class="glide__slide">
              <ProductoPopular 
                imagen={responseGts97?.thumbnail}
                nombre={responseGts97?.title}
                precio={responseGts97?.price}
              />
            </li>
            <li class="glide__slide">
              <ProductoPopular 
                imagen={responseAirJordan1Retro?.thumbnail}
                nombre={responseAirJordan1Retro?.title}
                precio={responseAirJordan1Retro?.price}
              />
            </li>
          </ul>
        </div>
        {/* Glide Track end */}
      </div>
      {/* Glide Container end */}
    </div>
    </>
  )
}
export default Slider;