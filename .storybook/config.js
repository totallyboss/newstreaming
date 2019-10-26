import { addParameters, configure, addDecorator } from '@storybook/react';

addParameters({
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  },
});

const pathOrder = ['./atoms/', './molecules/', './organisms/'];
const stories = require.context('../src', true, /__stories__\/.+\.story\.jsx/);

configure(
  () =>
    stories
      .keys()
      .sort((a, b) => {
        const sectionA = a.substring(0, a.indexOf('/', 2) + 1);
        const sectionB = b.substring(0, b.indexOf('/', 2) + 1);

        const orderA = pathOrder.indexOf(sectionA);
        const orderB = pathOrder.indexOf(sectionB);

        const diff = orderA - orderB;

        return diff === 0 ? a.localeCompare(b) : diff;
      })
      .forEach(stories),
  module
);
