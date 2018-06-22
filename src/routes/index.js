import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Landing from './landing';
import Profile1 from './profiles/profile1';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Landing}/>
			<Route path="/profile/jay" exact component={Profile1}/>
		</Switch>
	</BrowserRouter>
);