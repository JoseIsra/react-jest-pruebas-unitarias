import { create } from 'react-test-renderer'; 
import App from './App'; 

let component;

describe('<App />', ()=> {
  
  beforeEach(()=> {
    component = create(<App/>);

  });

  //casos de prueba my friend
    it('Renderización de componente App', ()=> {
      expect(component).toBeDefined();
    })

    it('se renderiza header tag', () => {
      const header = component.root.findByType('header');
      expect(header).toBeDefined();
      expect(header.props.className).toEqual('App-header');
    });
    
    it('tag header tiene elemento img', () => {
      const image = component.root.findByType('img');
      expect(image).toBeDefined();
      expect(image.props.className).toEqual('App-logo');
    });

    test('tag tiene su clase bien escrita', ()=>{
      const anchor = component.root.findByType('a');
      expect(anchor).toBeDefined();
      expect(anchor.props.className).toEqual('App-link');

    });
});