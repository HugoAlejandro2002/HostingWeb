import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import persona1 from "../../assets/persona1.jpg";
import persona2 from "../../assets/persona2.jpg";
import persona3 from "../../assets/persona3.jpg";
import persona4 from "../../assets/persona4.jpg";
import persona5 from "../../assets/persona5.jpg";
import persona6 from "../../assets/persona6.jpg";
import persona7 from "../../assets/persona7.jpg";
import persona8 from "../../assets/persona8.jpg";   
import persona9 from "../../assets/persona9.jpg";
import persona10 from "../../assets/persona10.jpg";

const PersonCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src={persona1} alt="Persona 1" />
        </div>
        <div>
          <img src={persona2} alt="Persona 2" />
        </div>
        <div>
          <img src={persona3} alt="Persona 3" />
        </div>
        <div>
          <img src={persona4} alt="Persona 4" />
        </div>
        <div>
          <img src={persona5} alt="Persona 5" />
        </div>
      </Slider>
    );
  };
  
export default PersonCarousel;
