export const gramsToOunces = (grams: number): string => {
    return parseFloat((grams * 0.035274).toFixed(2)) + 'oz';
}