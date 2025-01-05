import { useEffect, useRef, useState } from 'react';

interface Props {
  progress: number;
  size: 'Small' | 'Medium' | 'Large' | 'XL' | 'Full';
  estimatedValue: number;
  totalValue: string;
}

const ProgressBar = ({ progress = 0, size, estimatedValue, totalValue }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const sizeToWidthMap = {
    Small: 260,
    Medium: 376,
    Large: 584,
    XL: 737,
  };

  const width = size === 'Full' ? '100%' : `${sizeToWidthMap[size]}px`;
  const boxWidth = 8;
  const boxGap = 7;

  // Calculate total boxes based on actual container width
  const totalBoxes =
    size === 'Full'
      ? Math.floor(containerWidth / (boxWidth + boxGap))
      : Math.floor(Number(sizeToWidthMap[size]) / (boxWidth + boxGap));

  const boxesToFill = Math.round((progress / 100) * totalBoxes);

  useEffect(() => {
    if (!containerRef.current || size !== 'Full') return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [size]);

  return (
    <div ref={containerRef} style={{ maxWidth: width }}>
      <div className="flex justify-between items-center mb-2.5">
        {/* <div className={`text-grayscale-300 ${size === 'Medium' ? 'text-xs' : 'text-sm'}`}>
          Minted Total
        </div> */}

        <div
          className={`font-extrabold text-grayscale-300 ${
            size === 'Medium' ? 'text-xss' : 'text-sm '
          }`}
        >
          {progress}%
        </div>

        <div
          className={`font-extrabold text-grayscale-300 ${
            size === 'Medium' ? 'text-xss' : 'text-sm '
          }`}
        >
          ({Number(estimatedValue).toLocaleString()}/{Number(totalValue).toLocaleString()})
        </div>
      </div>

      <div className="flex gap-2" style={{ maxWidth: `${width}px` }}>
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2.5 ${
              index < boxesToFill ? 'bg-system-success' : 'bg-grayscale-700'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
