import * as React from "react";

export interface SampleWidgetProps {
    name: string;
    age: number;
}

export class SampleWidget extends React.Component<SampleWidgetProps, {}> {
    render() {
        return <div><h1>Hello {this.props.name} {this.props.age}</h1></div>;
    }
}
