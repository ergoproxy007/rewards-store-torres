class AmountProperties {

    constructor(value, theme) {
        this.value = value;
        this.theme = theme;
        this.text = '+'.concat(value);
    }
}

export { AmountProperties };
