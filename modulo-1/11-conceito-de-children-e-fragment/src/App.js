import { Photo } from './components/Photo'

function App() {
  return (
    <div>
      Olá

    {/*EXEMPLO DE CHILDREN*/}
      <Photo legend="Google">     
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      </Photo>
    </div>
  );
}

export default App;
