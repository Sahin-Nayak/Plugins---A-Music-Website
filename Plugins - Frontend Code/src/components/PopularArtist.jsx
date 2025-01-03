import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function PopularArtist() {
  // Define the carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Number of cards visible on desktop
      slidesToSlide: 1, // Number of cards to slide at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Number of cards visible on tablet
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Number of cards visible on mobile
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <br />
      <h1 className="uppercase text-white text-4xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popular Artist</h1>
      <br />
      <div className="p-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          {/* Cards for carousel */}
          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/arijit.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Arijit Singh */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/Shreya.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Shreya Ghosal */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/anuv.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Anuv Jain */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/arman.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Arman Mullick */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/lata.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Lata Mangeshkar */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/kumar.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Kumar Sanu */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/anupam.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* Anupam Roy */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/kk.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* KK */}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '28rem', height: '20rem', borderRadius: '10px', backgroundImage: 'url(/public/rd.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card.Body className="flex justify-center items-center">
              <Card.Title className="text-center text-3xl font-bold text-white pt-14">
                {/* RD Barman */}
              </Card.Title>
            </Card.Body>
          </Card>
        </Carousel>
      </div>
    </>
  );
}

export default PopularArtist;
