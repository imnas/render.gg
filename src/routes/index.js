import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Landing from './landing';
import Profile1 from './profiles/profile1';
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
			<Route path="/profile/jay" exact component={Profile1}/>
			<Route path="/careers" exact component={Careers}/>
			<Route path="/faq" exact component={Faq}/>
			<Route path="/apply" exact component={Apply}/>
			<Route path="/team" exact component={Team}/>
			<Route path="/job/editor" exact component={Job1}/>
			<Route path="/job/graphics" exact component={Job2}/>
		</Switch>
	</BrowserRouter>
);