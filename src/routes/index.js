import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Landing from './landing';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Landing}/>
		</Switch>
	</BrowserRouter>
);