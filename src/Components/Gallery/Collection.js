import React from "react";
import Gallery from "./Gallery.js";
import './collection.css'
import img1 from "../../image/imagecollecion/img1-min.jpg";
import img3 from "../../image/imagecollecion/img3-min.jpg";
import img4 from "../../image/imagecollecion/img4-min.jpg";
import img5 from "../../image/imagecollecion/img5-min.jpg";
import img6 from "../../image/imagecollecion/img6-min.jpg";
import img7 from "../../image/imagecollecion/img7-min.jpg";
import img8 from "../../image/imagecollecion/img8-min.jpg";
import img9 from "../../image/imagecollecion/img9-min.jpg";
import img10 from "../../image/imagecollecion/img10-min.jpg";
import img11 from "../../image/imagecollecion/img11-min.jpg";
import img12 from "../../image/imagecollecion/img12-min.jpg";
import img13 from "../../image/imagecollecion/img13-min.jpg";
import img14 from "../../image/imagecollecion/img14-min.jpg";
import img15 from "../../image/imagecollecion/img15-min.jpg";
import img16 from "../../image/imagecollecion/img16-min.jpg";
import img17 from "../../image/imagecollecion/img17-min.jpg";
import img18 from "../../image/imagecollecion/img19-min.jpg";
import img19 from "../../image/imagecollecion/img20-min.jpg";
import img20 from "../../image/imagecollecion/img21-min.jpg";
import img21 from "../../image/imagecollecion/img22-min.jpg";
import img22 from "../../image/imagecollecion/img23-min.jpg";
import img2 from'../../image/imagecollecion/img1-min.jpg';
function Collection() {
  return (
    <div className="gallaryContainer">
      <h1 className="welcome">Wellcome Home</h1>
      <Gallery img2={img1} img3={img11} />
      <Gallery   img2={img3}  img3={img4}/>
      <Gallery  img3={img5} img2={img6}/>
      <Gallery img2={img7} img3={img8} />
      <Gallery  img3={img9} img2={img10} />
      <Gallery img2={img11} img3={img12} />
      <Gallery img2={img13} img3={img14} />
      <Gallery img2={img2} img3={img15} />
      <Gallery img2={img16} img3={img17} />
      <Gallery img2={img18} img3={img19} />
      <Gallery img2={img20} img3={img21} />
      <Gallery img2={img22} img3={img9} />
    </div>
  );
}

export default Collection;
