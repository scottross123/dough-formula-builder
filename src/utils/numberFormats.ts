export const metricFormat = (n: number) => {
    return Math.round(n).toString() + 'g';
}

export const numberFormats = (n: number) => {
    return parseFloat((n * 100).toFixed(2)) + '%';
}