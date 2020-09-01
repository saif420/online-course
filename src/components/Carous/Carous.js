import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Carous.css';

const Carous = () => {
  return (
    <div>
      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://picsum.photos/500/300?img=1" alt="First slide"/>
              <Carousel.Caption>
                <h1>Learn With Fun On Any Schedule</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.Learn With Fun On Any Schedule Varius blandit facilisis quam netus</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="https://picsum.photos/500/300?img=2" alt="Third slide"/>
            <Carousel.Caption>
                <h1>Learn With Fun On Any Schedule</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.Learn With Fun On Any Schedule Varius blandit facilisis quam netus</p>
              </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://picsum.photos/500/300?img=3" alt="Third slide"/>
          <Carousel.Caption>
                <h1>TLearn With Fun On Any Schedule</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.Learn With Fun On Any Schedule Varius blandit facilisis quam netus</p>
          </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carous;