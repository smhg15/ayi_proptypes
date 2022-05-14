import {BrowserRouter, Route, Routes} from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import PruebaProps from './components/PruebaProps';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage text={{title:"Welcome to the prop-types app!", button:"Go!" }}/>}/>
        
        <Route exact path="/proptypes" element={
          <PruebaProps
            text={{title:"We already recived the props", button:"Go back!" }}

            name= 'literalmente cualquier cosa'
            ejString={"This is the new page"}
            ejNumber={3}
            ejArray={['is', true, 'you can', 'map me']}
            stringOrNumber={23}
            ejArrayOfNumbers={[2,4,6]}
            ejArrayOfArray={[['hola',true], [24,false]]}
            state='Loading'
            ejElemento={<WelcomePage text={{title:"Welcome to the prop-types app!", button:"Go!" }}/>}
            ejShape={{texto:"This is the new page", unNumero:3, unArreglo:[3,'hola', false]}}
            ejRenderable={<WelcomePage text={{title:"Welcome to the prop-types app!", button:"Go!" }}/>}
          />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
