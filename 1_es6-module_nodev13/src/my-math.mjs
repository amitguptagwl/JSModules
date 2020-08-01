// Not exported, private to module
function times(a, b) {
    return a * b;
}
export function square(x) {
    return times(x, x);
}
export const LIGHTSPEED = 299792458;