'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Slider from 'react-slick';

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Yearly', priceSuffix: '/year' },
];

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    price: { monthly: '$19', annually: '$199' },
    description: 'Lorem ipsum dolor sit amet consectetur. In varius donec in.',
    features: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    price: { monthly: '$54', annually: '$540' },
    description: 'Lorem ipsum dolor sit amet consectetur. In varius donec in.',
    features: [
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum',
    ],
    mostPopular: false,
  },
  {
    name: 'Company',
    id: 'tier-company',
    href: '#',
    price: { monthly: '$89', annually: '$890' },
    description: 'Lorem ipsum dolor sit amet consectetur. In varius donec in.',
    features: [
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit',
      'Lorem ipsum',
    ],
    mostPopular: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:hidden block mb-20">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-center lg:text-[34px] text-[24px] font-bold font-inter mb-8 mt-16">Pricing</h2>

        <div className="mt-6 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-2 rounded-full p-1 text-center text-sm font-medium bg-gray-100"
          >
            {frequencies.map((option) => (
              <Radio
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-200",
                    "cursor-pointer rounded-full px-6 py-2"
                  )
                }
              >
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 relative">
        <Slider {...sliderSettings}>
          {tiers.map((tier) => (
            <div key={tier.id} className="px-4">
              <div
                className={classNames(
                  "bg-[#F7F5FF] shadow-lg relative flex flex-col rounded-xl p-6 transition-all duration-300",
                  tier.mostPopular ? "border border-indigo-600 scale-105" : "border border-gray-200"
                )}
              >
                {/* Most Popular Badge */}
                {tier.mostPopular && (
                  <div className="absolute top-4 right-4 rounded-full font-inter bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                {/* Price Section */}
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-[36px] font-bold text-grayscale-900 font-inter">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-base text-[#4A4D4F] font-bold font-inter">
                    {frequency.priceSuffix}
                  </span>
                </div>

                {/* Card Header */}
                <div>
                  <h3 id={tier.id} className="mt-4 text-[28px] font-inter font-bold text-grayscale-900">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-base font-normal text-[#4A4D4F]">{tier.description}</p>
                </div>

                {/* Features */}
                <ul className="mt-6 mb-10 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2">
                      <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Choose Plan Button */}
                <a
                  href={tier.href}
                  className="mt-auto bg-indigo-600 text-white hover:bg-indigo-500 block w-full rounded-lg px-5 py-3 text-center text-sm font-medium"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
