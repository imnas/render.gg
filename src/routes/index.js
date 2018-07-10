import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Landing from './landing';

import Ben from './profiles/ben';
import Oscar from './profiles/oscar';
import Floris from './profiles/floris';
import Zane from './profiles/zane';
import Jasmin from './profiles/jasmin';
import Joao from './profiles/joao';
import Gabriel from './profiles/gabriel';
import Andrea from './profiles/andrea';
import Brian from './profiles/brian';
import Kim from './profiles/kim';
import Shane from './profiles/shane';
import Levi from './profiles/levi';
import Nicholas from './profiles/nicholas';
import Robert from './profiles/robert';

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
			<Route path="/profile/floris" exact component={Floris}/>
			<Route path="/profile/zane" exact component={Zane}/>
			<Route path="/profile/jasmin" exact component={Jasmin}/>
			<Route path="/profile/gabriel" exact component={Gabriel}/>
			<Route path="/profile/joao" exact component={Joao}/>
			<Route path="/profile/andrea" exact component={Andrea}/>
			<Route path="/profile/brian" exact component={Brian}/>
			<Route path="/profile/kim" exact component={Kim}/>
			<Route path="/profile/shane" exact component={Shane}/>
			<Route path="/profile/levi" exact component={Levi}/>
			<Route path="/profile/nicholas" exact component={Nicholas}/>
			<Route path="/profile/robert" exact component={Robert}/>
			<Route path="/careers" exact component={Careers}/>
			<Route path="/faq" exact component={Faq}/>
			<Route path="/apply" exact component={Apply}/>
			<Route path="/team" exact component={Team}/>
			<Route path="/job/editor" exact component={Job1}/>
			<Route path="/job/graphics" exact component={Job2}/>
		</Switch>
	</BrowserRouter>
);