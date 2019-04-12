import * as React from "react";

type PropTypes = {
    name: string;
    age: number;
}

interface SampleWidgetProps {
    name: string;
    age: number;
}

const SampleWidget: React.FunctionComponent<SampleWidgetProps> = ({ name, age }: PropTypes ) => (
    <div>
        <h1>Hello {name} {age}</h1>
    </div>
);

export {
    SampleWidget
};
