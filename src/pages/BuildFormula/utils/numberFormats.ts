export const metricFormat = (n: number) => {
    return Math.round(n).toString() + 'g';
}

export const percentFormat = (n: number) => {
    return parseFloat((n * 100).toFixed(2)) + '%';
}