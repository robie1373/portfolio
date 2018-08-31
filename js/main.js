import React from 'react';
import ReactDom from 'react-dom';
import ExampleWorks from './example-work';

const myWork = [
  {
    'title': "Placeholder 1.",
    'href': "https://portfolio.robielutsey.com",
    'desc': "Updates coming soon. Thank you for your patience.",
    'image': {
      'desc': "Fancy placeholder. Not as good as the real thing, but ok.",
      'src': "images/example1.png",
      'comment': "Under construction"
    }
  },
  {
    'title': "Placeholder 2.",
    'href': "https://portfolio.robielutsey.com",
    'desc': "Updates coming soon. Thank you for your patience.",
    'image': {
      'desc': "Fancy placeholder. Not as good as the real thing, but ok.",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
           https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': "Placeholder 3.",
    'href': "https://portfolio.robielutsey.com",
    'desc': "Updates coming soon. Thank you for your patience.",
    'image': {
      'desc': "Fancy placeholder. Not as good as the real thing, but ok.",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDom.render(<ExampleWorks work={myWork}/>, document.getElementById('example-work'));
