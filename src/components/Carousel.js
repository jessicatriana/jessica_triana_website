import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={100}
        totalSlides={9}
        visibleSlides={3}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          <Slide index={0}>
            <h5>Lexus</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lexus.png"
              alt="lexus"
              width="300px"
            />
            <br></br>
            Houston Auto Show
          </Slide>
          <Slide index={1}>
            <h5>Lexus</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lexus1.png"
              alt="lexus"
              width="300px"
            />
            <br></br>
            Dallas Auto Show
          </Slide>
          <Slide index={2}>
            <h5>Lexus</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lexus2.png"
              alt="lexus"
              width="300px"
            />
            <br></br>
            New York Auto Show
          </Slide>
          <Slide index={3}>
            <h5>Nike</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/nike.png"
              alt="nike"
              width="300px"
            />
            <br></br>
            Houston Superbowl
          </Slide>
          <Slide index={4}>
            <h5>Google</h5>
            <img
              src="http://jessicatrianawebsite.s3.us-east-2.amazonaws.com/google.png"
              alt="google"
              width="300px"
            />
            <br></br>
            Las Vegas Consumer Electronics Show
          </Slide>
          <Slide index={5}>
            <h5>Nintendo</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/nintendo.png"
              alt="nintendo"
              width="300px"
            />
            <br></br>
            Austin SXSW
          </Slide>
          <Slide index={6}>
            <h5>Nissan</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/nissan.png"
              alt="nissan"
              width="300px"
            />
            <br></br>
            New York Auto Show
          </Slide>
          <Slide index={7}>
            <h5>Omen by HP</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/omen.png"
              alt="omen"
              width="300px"
            />
            <br></br>
            San Antonio PAX South
          </Slide>
          <Slide index={8}>
            <h5>LG</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lg.png"
              alt="lg"
              width="300px"
            />
            <br></br>
            Las Vegas Consumer Electronics Show
          </Slide>
        </Slider>
        <ButtonBack
          style={{ borderRadius: "10px", margin: "5px", fontSize: "12px" }}
        >
          Back
        </ButtonBack>
        <ButtonNext
          style={{ borderRadius: "10px", margin: "5px", fontSize: "12px" }}
        >
          Next
        </ButtonNext>
      </CarouselProvider>
    );
  }
}
