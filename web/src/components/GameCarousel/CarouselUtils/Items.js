import "./Items.module.css";
import { img1Url, img2Url, img3Url } from "../../../utils/imgUrls";

const imgStyle = {
    width: '100%',
    maxHeight: '750px',
    margin: '0 auto'
};

const itemStyle = {
    height: 600
}

const Items = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active" style={itemStyle}>
          <div className={'container'}>
              <img src={img1Url} className="d-block w-100" alt="..." style={imgStyle}/>
          </div>
          <div className={'container'}>
              <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
              </div>
          </div>
      </div>
      <div className="carousel-item" style={itemStyle}>
        <img src={img2Url} className="d-block w-100" alt="..." style={imgStyle}/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item" style={itemStyle}>
        <img src={img3Url} className="d-block w-100" alt="..." style={imgStyle}/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
