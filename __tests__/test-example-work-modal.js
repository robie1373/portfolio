import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myExample =   {
    'title': "This is not my Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  }

describe("ExampleWorkModal Component", () => {
  let component = shallow(<ExampleWorkModal example={myExample} open={false}/>);
  let mockCloseModalFn = jest.fn();

  let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} closeModal={ mockCloseModalFn }/>);

  let anchors = component.find("a");
  it("should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should linke to our project", () => {
    expect(anchors.node.props.href).toEqual(myExample.href);
  });

  it("should have the modal class set correctly", () => {
    expect(component.find(".background--niceGreen").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--niceGreen").hasClass("modal--open")).toBe(true);
  });

  it("should signal the modal to close when the x is clicked", () => {
    openComponent.find(".modal__closeButton").simulate('click');
    expect(mockCloseModalFn).toHaveBeenCalled();
  });
});
