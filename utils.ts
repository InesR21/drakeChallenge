interface Color {
  [key: string]: string;
}
export interface Release {
  au?: string;
  eu?: string;
  jp?: string;
  na?: string;
}

export const backgroundColors: Color = {
  Figure: '#b2f5ea',
  Card: '#bee3f8',
  Band: '#e9d8fd',
  Yarn: '#fed7e2',
};

export const textColor: Color = {
  Figure: '#285e61',
  Card: '#2c5282',
  Band: '#553c9a',
  Yarn: '#434190',
};

export const getBackgroundColor = (type: string) => {
  return backgroundColors[type];
};

export const getTextColor = (type: string) => {
  return textColor[type];
};

export const generateRandomPrice = (): number => {
  const min = 1000;
  const max = 100000;
  const step = 10;
  const range = (max - min) / step;
  const randomIndex = Math.floor(Math.random() * range);
  const randomPrice = randomIndex * step + min;

  return randomPrice;
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
