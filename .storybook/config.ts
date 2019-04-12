import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

function loadStories() {
    require("../stories");
}

addDecorator(withInfo({ header: false }));

configure(loadStories, module);
