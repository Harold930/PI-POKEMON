import React from "react";
//  import { configure, shallow} from "enzyme";
//  import Enzyme from 'enzyme';
//  import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import  expect  from 'chai';
// const require = ('chai');

import Detail from "./Detail";

 configure({ adapter: new Adapter() }); 

describe("<Detail/>", () => {
  describe("Estructura", () => {
    let wrapper;
    let props = {
      pokemon: {
        sprite: "https://cdn.pixabay.com/photo/2018/07/10/11/29/hamster-3528446_960_720.jpg",
        name: "Putin",
        types: ["electric"] 
      } 
    }
    beforeEach(() => {
      wrapper = shallow(<Detail props={props}/>);
    });

    it('Renderiza una imagen', () => {
      expect(wrapper.find('image')).toHaveLength(1);
    });

    it('Debe tener un boton de tipo submit', () => {
        expect(wrapper.find('button')).toHaveLength(1);
      });
  });
});