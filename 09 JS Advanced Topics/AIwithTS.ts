//@ Using AI with JS/TS - additional exercises
//* Generate a function that takes a hex color as parameter, computes contrast to white and black and returns the color whit bigger contrast

//* Function one
function calculateContrast(hexColor: string): string {
  // Convert hex color to RGB
  const hexToRgb = (hex: string): number[] => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  // Calculate contrast ratio using RGB values
  const calculateContrastRatio = (rgb1: number[], rgb2: number[]): number => {
    const luminance1 = calculateLuminance(rgb1);
    const luminance2 = calculateLuminance(rgb2);
    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  };

  // Calculate luminance using RGB values
  const calculateLuminance = (rgb: number[]): number => {
    const [r, g, b] = rgb.map((val) => val / 255);
    const gammaCorrect = (value: number): number => {
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    const red = gammaCorrect(r);
    const green = gammaCorrect(g);
    const blue = gammaCorrect(b);
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };

  const blackRgb = hexToRgb("#000000");
  const whiteRgb = hexToRgb("#FFFFFF");
  const inputRgb = hexToRgb(hexColor);

  const contrastToBlack = calculateContrastRatio(inputRgb, blackRgb);
  const contrastToWhite = calculateContrastRatio(inputRgb, whiteRgb);
  // console.log(1, contrastToBlack, contrastToWhite);

  return contrastToBlack > contrastToWhite ? "#000000" : "#FFFFFF";
}

//* Function two
function calculateContrast2(hexColor: string): string {
  // Convert hex color to RGB
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  // Calculate contrast ratio
  const calculateContrastRatio = (rgb: number[]) => {
    const [r, g, b] = rgb.map((c) => {
      const sRGB = c / 255;
      return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    });
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return (luminance + 0.05) / (0.05 + 1);
  };

  // Calculate contrast to black and white
  const blackContrast = calculateContrastRatio(hexToRgb(hexColor));
  const whiteContrast = calculateContrastRatio(hexToRgb("#FFFFFF"));
  // console.log(2, blackContrast, whiteContrast);

  // Return color with bigger contrast
  return blackContrast > whiteContrast ? "#000000" : "#FFFFFF";
}

//* Function 3
//* DynamicTextColor -> function taken from: https://wunnle.com/dynamic-text-color-based-on-background
export const dynamicTexColor = (bgcColor: string): string => {
  // console.log({ bgcColor });

  function getRGB(color: string): number {
    return parseInt(color as string, 16) || (Number(color) as number);
  }

  function getsRGB(color: string): number {
    return getRGB(color) / 255 <= 0.03928
      ? getRGB(color) / 255 / 12.92
      : Math.pow((getRGB(color) / 255 + 0.055) / 1.055, 2.4);
  }

  //* Contrast Ratio
  function getLuminance(hexColor: string): number {
    return (
      0.2126 * getsRGB(hexColor.substr(1, 2)) +
      0.7152 * getsRGB(hexColor.substr(3, 2)) +
      0.0722 * getsRGB(hexColor.substr(-2))
    );
  }

  function getContrast(colorToCheck: string, blackWhite: string): number {
    const L1 = getLuminance(colorToCheck);
    const L2 = getLuminance(blackWhite);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  function getTextColor(bgcColor: string): string {
    const whiteContrast = getContrast(bgcColor, "#ffffff");
    const blackContrast = getContrast(bgcColor, "#000000");
    // console.log({ whiteContrast, blackContrast });
    return whiteContrast > blackContrast ? "#ffffff" : "#000000";
  }
  // console.log("getTextColor(bgcColor):", getTextColor(bgcColor));
  return getTextColor(bgcColor);
};

//* Example usage
const inputColor = "#32A852";
const hexColor = "#FF0000";

// Function 3
const testColor1 = dynamicTexColor(inputColor);
const testColor2 = dynamicTexColor(hexColor);
console.log({ testColor1, testColor2 }); //* output: { testColor1: '#000000', testColor2: '#000000' }

// Function 1
const contrastColor = calculateContrast(inputColor);
const contrastColor2 = calculateContrast(hexColor);
console.log({ contrastColor, contrastColor2 }); //* output: { contrastColor: '#000000', contrastColor2: '#000000' }

// Function 2
const colorWithBiggerContrast = calculateContrast2(inputColor);
const colorWithBiggerContrast2 = calculateContrast2(hexColor);
console.log({ colorWithBiggerContrast, colorWithBiggerContrast2 });
//! output - different values: {colorWithBiggerContrast: '#FFFFFF', colorWithBiggerContrast2: '#FFFFFF'}
