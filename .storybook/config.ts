import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withCssResources } from '@storybook/addon-cssresources';

function loadStories() {
    require("../stories");
}

addDecorator(withInfo({ header: false }));
addDecorator(withKnobs);

addDecorator(withCssResources)
addParameters({
    cssresources: [
        {
            id: `bluetheme`,
            code: `<style>body { background-color: lightblue; }</style>`,
            picked: false,
        },
    ],
});

configure(loadStories, module);
