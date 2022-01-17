import './App.css';

import { useState, useEffect } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya!"
  },
  "en-US": {
    title: "Hello World!"
  }
}

function App() {
  return (<div className="App">
    <IntlProvider messages={messages['tr-TR']}>
      
        <p>
          <FormattedMessage id="title"/>
        </p>

        <button>TR</button>
        <button>EN</button>
     
    </IntlProvider>
     </div>
  );
}

export default App;
