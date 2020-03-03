import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto'

import StateProvider from './context/store';

ReactDOM.render(
	<StateProvider>
		<App />
	</StateProvider>
, document.getElementById('root'));
