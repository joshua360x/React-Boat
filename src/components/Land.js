// import React from 'react'
import './Land.css'
// import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
import Card from './Card'
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Land() {

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 1
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

return (
<>




<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={4000}
  autoPlay
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <Card mainText='WHY' text='Live and Get the Boat' src={require("../images/pexels-charles-parker-5847453.jpg").default} alt="photo" />
  <Card mainText='WHERE' text='You could be a True Bro' src={require("../images/pexels-lukas-296278.jpg").default} alt="photo" />
  <Card mainText='WHAT' text='And Dwell in the city of merchants' src={require("../images/pexels-timo-volz-3769312.jpg").default} alt="photo" />
</Carousel>

</>
)
  
//   return (
//     <>


//       <Carousel fade className='sad'>
//   <Carousel.Item className='item1'>
//     <img
//       className="d-block w-100"
//       src={require("../images/pexels-lukas-296243.jpg").default}
//       alt="First slide"
//     />
//     <Carousel.Caption className='caption-header'>
//       <h3 className='tag-header'>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className='item1'>
//     <img
//       className="d-block w-100"
//       src={require("../images/pexels-lukas-296278.jpg").default}
//       alt="Second slide"
//     />

//     <Carousel.Caption className='caption-header'>
//       <h3 className='tag-header'>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className='item1'>
//     <img
//       className="d-block w-100"
//       src={require("../images/pexels-timo-volz-3769312.jpg").default}
//       alt="Third slide"
//     />

//     <Carousel.Caption className='caption-header'>
//       <h3 className='tag-header'>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>







//     </>
//   )
}

export default Land
