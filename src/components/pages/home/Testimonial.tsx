import React from 'react';
import Slider from 'react-slick';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  image: string;
}

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: 'block',
        backgroundImage: "url('/assets/images/arrow_right.png')",
        backgroundSize: 'cover',
        width: '83px',
        height: '33px',
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: 'block',
        backgroundImage: "url('/assets/images/arrow_left.png')",
        backgroundSize: 'cover',
        width: '83px',
        height: '33px',
      }}
      onClick={onClick}
    />
  );
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Vitae nec varius varius tincidunt at suspendisse aliquam. Arcu at placerat risus sit facilisis elementum rutrum ultrices eu. Urna cursus egestas pellentesque bibendum nulla nisi dapibus in. Enim velit.',
    name: 'John Mick',
    position: 'CEO Innovative Inc.',
    image: '/assets/images/placeholder.png',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Vitae nec varius varius tincidunt at suspendisse aliquam. Arcu at placerat risus sit facilisis elementum rutrum ultrices eu. Urna cursus egestas pellentesque bibendum nulla nisi dapibus in. Enim velit.',
    name: 'Jane Doe',
    position: 'CTO Tech Corp.',
    image: '/assets/images/placeholder.png',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Vitae nec varius varius tincidunt at suspendisse aliquam. Arcu at placerat risus sit facilisis elementum rutrum ultrices eu. Urna cursus egestas pellentesque bibendum nulla nisi dapibus in. Enim velit.',
    name: 'Alice Johnson',
    position: 'CFO Finance Inc.',
    image: '/assets/images/placeholder.png',
  },
];

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile
          centerMode: true, // Enable center mode
          centerPadding: '30px', // Show part of previous/next slides from edges
        },
      },
    ],
  };
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-center lg:text-[34px] text-[24px] lg:font-bold font-semibold font-inter mb-8 mt-16">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#F7F5FF] rounded-xl p-6 lg:min-h-[368px] lg:min-w-[325px] flex flex-col">
              <img src="/assets/images/inverted-commas.png" className="w-10" />
              <p className="text-grayscale-800 font-inter text-base font-normal my-2">{testimonial.quote}</p>
              <div className="h-px bg-[#E5E7E7] w-full"></div>
              <div className="flex items-center lg:mt-auto mt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-black text-[22px] font-inter">{testimonial.name}</p>
                  <p className="text-sm font-inter font-normal text-grayscale-700">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
