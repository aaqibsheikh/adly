import { useState } from 'react';

const NumberInputWithMultiplier = () => {
  const [value, setValue] = useState<number>(1);

  const handleMultiplierClick = (multiplier: number) => {
    setValue(multiplier);
  };

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue(prevValue => (prevValue > 1 ? prevValue - 1 : 1));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Math.max(1, parseInt(event.target.value.replace(/\D/g, ''), 10) || 1);
    setValue(inputValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end self-end gap-1">
        {[2, 5, 10].map(multiplier => (
          <button
            key={multiplier}
            onClick={() => handleMultiplierClick(multiplier)}
            className="px-3 py-0.5 text-xs text-grayscale-400 bg-grayscale-900 rounded hover:bg-grayscale-800"
          >
            x{multiplier}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          className="flex items-center justify-center w-[38px] h-[38px] bg-grayscale-700 rounded"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.8995 12.5001L20.4853 11.0859L19.0711 12.5001L17.6569 11.0859L16.2426 12.5001L14.8284 11.0859L13.4142 12.5001L12 11.0859L10.5858 12.5001L9.17157 11.0859L7.75736 12.5001L6.34315 11.0859L4.92893 12.5001L3.51472 11.0859L2.10051 12.5001L3.51472 13.9143L4.92893 12.5001L6.34315 13.9143L7.75736 12.5001L9.17157 13.9143L10.5858 12.5001L12 13.9143L13.4142 12.5001L14.8284 13.9143L16.2426 12.5001L17.6569 13.9143L19.0711 12.5001L20.4853 13.9143L21.8995 12.5001Z"
              fill="#E6E6E6"
            />
          </svg>
        </button>

        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="w-[98px] h-[38px] text-center text-white bg-grayscale-700 rounded !ring-0 !outline-none"
        />

        <button
          onClick={handleIncrement}
          className="flex items-center justify-center w-[38px] h-[38px] bg-grayscale-700 rounded"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.60059L13.4142 4.0148L12 5.42901L10.5858 4.0148L12 2.60059ZM12 8.25744L10.5858 6.84323L12 5.42901L13.4142 6.84323L12 8.25744ZM12 11.0859L10.5858 9.67165L12 8.25744L13.4142 9.67165L12 11.0859ZM13.4142 12.5001L12 11.0859L10.5858 12.5001L9.17157 11.0859L7.75736 12.5001L6.34315 11.0859L4.92893 12.5001L3.51472 11.0859L2.10051 12.5001L3.51472 13.9143L4.92893 12.5001L6.34315 13.9143L7.75736 12.5001L9.17157 13.9143L10.5858 12.5001L12 13.9143L10.5858 15.3285L12 16.7427L10.5858 18.1569L12 19.5711L10.5858 20.9854L12 22.3996L13.4142 20.9854L12 19.5711L13.4142 18.1569L12 16.7427L13.4142 15.3285L12 13.9143L13.4142 12.5001ZM16.2426 12.5001L14.8284 13.9143L13.4142 12.5001L14.8284 11.0859L16.2426 12.5001ZM19.0711 12.5001L17.6569 13.9143L16.2426 12.5001L17.6569 11.0859L19.0711 12.5001ZM19.0711 12.5001L20.4853 11.0859L21.8995 12.5001L20.4853 13.9143L19.0711 12.5001Z"
              fill="#E6E6E6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NumberInputWithMultiplier;
