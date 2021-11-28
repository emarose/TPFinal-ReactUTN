import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import img1 from './bannerasus1.jpg'
import img2 from './bannerasus2.jpg'
import img3 from './bannerlogitech1.jpg'

function MarcasSlideshow() {
  const styles={
    img:{
        margin: "100px 0",
        width:"100%",
        height:"auto"
    }
}
  return (
    <>
      <Container>
        <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
          <Carousel.Item className="CarouselItem">
            <img style={styles.img} src={img1} alt="asus" />
          </Carousel.Item>

          <Carousel.Item className="CarouselItem">
            <img style={styles.img} src={img2} alt="asus" />
          </Carousel.Item>

          <Carousel.Item className="CarouselItem">
            <img style={styles.img} src={img3} alt="logitech" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default MarcasSlideshow
