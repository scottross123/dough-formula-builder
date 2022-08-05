export const metricFormat = (n: number): string => {
    return Math.round(n).toString() + 'g';
}

export const percentFormat = (n: number): string => {
    return parseFloat((n * 100).toFixed(2)) + '%';
}

export const formatContent = (type: 'name' | 'metric' | 'ratio', content: string | number): string => {
    switch (type) {
        case 'metric':
            return metricFormat(content as number);
        case 'ratio':
            return percentFormat(content as number);
        case 'name':
            return content as string;
    }
    return content.toString();
}