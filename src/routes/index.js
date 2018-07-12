import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Landing from './landing';

import Ben from './profiles/ben';
import Oscar from './profiles/oscar';

import Careers from './careers/index';
import Faq from './faq/faq';
import Team from './profiles/team';
import Apply from './careers/apply';

import Job1 from './careers/job1';
import Job2 from './careers/job2';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Landing}/>
			<Route path="/profile/ben" exact component={Ben}/>
			<Route path="/profile/oscar" exact component={Oscar}/>
			<Route path="/careers" exact component={Careers}/>
			<Route path="/faq" exact component={Faq}/>
			<Route path="/apply" exact component={Apply}/>
			<Route path="/team" exact component={Team}/>
			<Route path="/job/editor" exact component={Job1}/>
			<Route path="/job/graphics" exact component={Job2}/>
		</Switch>
	</BrowserRouter>
);