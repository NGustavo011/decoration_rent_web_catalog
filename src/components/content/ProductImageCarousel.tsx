import React from 'react';
import { Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

type ProductImageCarouselProps = {
    cards: string[]
}

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const ProductImageCarousel = ({cards}: ProductImageCarouselProps)=> {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  return (
    <Box
      position={'relative'}
      h={'550px'}
      w="550px"
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {
        cards.length>1 && (
            <>
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                bgColor="footerBg"
                color="footerText"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                _hover={{bgColor: "footerBgHover"}}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                bgColor="footerBg"
                color="footerText"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                _hover={{bgColor: "footerBgHover"}}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            </>
        )
      }
      
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image h="550px" w="550px" src={url} objectFit="cover"/>
        ))}
      </Slider>
    </Box>
  );
}