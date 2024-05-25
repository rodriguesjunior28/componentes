import React from 'react';
import { Header } from './components/Header/Header';
import { CoreConcepts } from './components/CoreConcepts';
import { CORE_CONCEPTS } from './Data.js';
import { TabButton } from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './Data.js';

function App() {
  const [selectedTopic,setSelectedTopic] = useState(false);
  function handleSelect(selectedButton) {
   setSelectedTopic(selectedButton)
   console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic</p>;

 if(selectedTopic) {
 tabContent = 
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <p>{EXAMPLES[selectedTopic].code}</p>
     </div>
 }

  return (
    <div>
    <Header />
    <main>
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          { //CORE_CONCEPTS - é um arquivo que se cria por API ou manualmente, no caso ele está no Data.js
            CORE_CONCEPTS.map((element) => (<CoreConcepts key={element.title} {...element} />))
                        //map é pra fazer um array
                        //dentro de outro array          //Key={element.title} é uma chave pra evitar erro pode ser qualquer nome que esteja na props
                                                         //{...element} - é o abreviamento pra pegar as props = {image,title,description}       
          } 
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
        <TabButton 
        isSelected={selectedTopic === 'components'}
        onSelected={()=> handleSelect('components')}>Components</TabButton>
        <TabButton
         isSelected={selectedTopic === 'jsx'}
         onSelected={()=> handleSelect('jsx')} 
        >JSX</TabButton>
        <TabButton
         isSelected={selectedTopic === 'props'}
         onSelected={()=> handleSelect('props')}
        >Props</TabButton>
        <TabButton
         isSelected={selectedTopic === 'state'}
         onSelected={()=> handleSelect('state')}
        >State</TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
    </div>
  );
}

export default App;