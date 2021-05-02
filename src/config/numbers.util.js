
export function numberWithCommas(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
}

export function divisionRoundValue(x, y) {
    const z = x / y;
    return Math.round(z);
}

export function divisionFloorValue(x, y) {
    const z = x / y;
    return Math.floor(z);
}

export function divisionCeilValue(x, y) {
    const z = x / y;
    return Math.ceil(z);
}
