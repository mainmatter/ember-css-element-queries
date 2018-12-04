'use strict';

const path = require('path');
const resolve = require('resolve');
const Funnel = require('broccoli-funnel');
const Concat = require('broccoli-concat');

module.exports = {
  name: require('./package').name,

  contentFor(type, config) {
    if (type === 'body') {
      return `
        <script src="${config.rootURL}assets/css-element-queries.js"></script>
        <script>
          if(typeof FastBoot === 'undefined') {
            ElementQueries.listen();
            ElementQueries.init();
          }
        </script>
      `;
    }
  },

  treeForPublic() {
    let cssEQPath = path.dirname(resolve.sync('css-element-queries'));
    let cssEQTree = new Funnel(cssEQPath, {
      srcDir: 'src',
      files: ['ResizeSensor.js', 'ElementQueries.js'],
    });
    return Concat(cssEQTree, {
      headerFiles: ['ResizeSensor.js', 'ElementQueries.js'], // need to use headerFiles as inputFiles are un-ordered
      inputFiles: [],
      outputFile: 'assets/css-element-queries.js'
    });
  },
};
