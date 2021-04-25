import { AmountProperties } from "model/amount.props.model";
import config from 'config/config';

class AmountPropertiesBuilder {
    build() {
        const set = new Set([
            new AmountProperties(config.LOW, 'secondary'),
            new AmountProperties(config.MIDDLE, 'primary'),
            new AmountProperties(config.HIGH, 'secondary'),
        ]);
        return Array.from(set);
    }
}

export { AmountPropertiesBuilder };
