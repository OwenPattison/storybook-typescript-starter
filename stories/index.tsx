import * as React from "react";
import { SampleWidget } from "../src";

import { storiesOf } from "@storybook/react";

storiesOf("Sample Library", module)
    .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
    .add(
        "Sample Widget",
        () => <SampleWidget name="Owen" age={33} />,
        { info: { inline: true } }
    );
