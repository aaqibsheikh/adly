type IconName =
  | 'avaxM'
  | 'avaxS'
  | 'ethM'
  | 'ethS'
  | 'bnbM'
  | 'bnbS'
  | 'solM'
  | 'solS'
  | 'egldS'
  | 'suiM'
  | 'suiS';

export const getIconName = (networkCurrency: string, size: 'M' | 'S'): IconName => {
  switch (networkCurrency) {
    case 'AVAX':
      return `avax${size}`;
    case 'ETH':
      return `eth${size}`;
    case 'BNB':
      return `bnb${size}`;
    case 'SOL':
      return `sol${size}`;
    case 'SUI':
      return `sui${size}`;
      case 'EGLD':
        return `egldS${size}`;
    default:
      return `eth${size}`;
  }
};
