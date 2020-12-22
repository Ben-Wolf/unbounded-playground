/**
 * Create timeout is a wrapper around setTimeout.
 * Provides more readable understanding of async operations.
 */
export const createTimeout = (delay: number = 1000, innerCallback, args: any[]) => {
    return setTimeout(() => {
        innerCallback(...args);
    }, delay);
}