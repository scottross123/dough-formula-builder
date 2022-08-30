export const hyphenateAndLowercase = (str: string): string =>
    str.replace(/\s+/g, '-').toLowerCase();
