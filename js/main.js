import React from 'react';
import ReactDom from 'react-dom';
import ExampleWorks from './example-work';

const myWork = [
  {
    'title': "This is not my Work Example",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "This is not my Work Example either",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
           https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': "Also not my Work Example",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDom.render(<ExampleWorks work={myWork}/>, document.getElementById('example-work'));
