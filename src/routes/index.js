import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Landing from './landing';

import Sector from './profiles/sector';
import Vultar from './profiles/vultar';
import Frosturne from './profiles/frosturne';
import Bijon from './profiles/bijon';
import Skyvz from './profiles/skyvz';
import Kenosaurr from './profiles/kenosaurr';
import StevoTevo from './profiles/stevotevo';
import Edir from './profiles/edir';
import Kevin from './profiles/kevin';
import Rockit from './profiles/rockit';
import Roemme from './profiles/roemme';
import Spliffiam from './profiles/spliffiam';
import Dreams from './profiles/dreams';
import JoshA from './profiles/josha';
import Zero from './profiles/zero';
import Echo from './profiles/echo';
import Brian from './profiles/brian';
import Haylox from './profiles/haylox';
import Levi from './profiles/levi';
import Void from './profiles/void';
import Ethan from './profiles/ethan';
import Jhinxx from './profiles/jhinxx';

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
			<Route path="/profile/sector" exact component={Sector}/>
			<Route path="/profile/vultar" exact component={Vultar}/>
			<Route path="/profile/frosturne" exact component={Frosturne}/>
			<Route path="/profile/bijon" exact component={Bijon}/>
			<Route path="/profile/skyvz" exact component={Skyvz}/>
			<Route path="/profile/kenosaurr" exact component={Kenosaurr}/>
			<Route path="/profile/stevotevo" exact component={StevoTevo}/>
			<Route path="/profile/edir" exact component={Edir}/>
			<Route path="/profile/kevin" exact component={Kevin}/>
			<Route path="/profile/rockit" exact component={Rockit}/>
			<Route path="/profile/roemme" exact component={Roemme}/>
			<Route path="/profile/spliffiam" exact component={Spliffiam}/>
			<Route path="/profile/dreams" exact component={Dreams}/>
			<Route path="/profile/josha" exact component={JoshA}/>
			<Route path="/profile/zero" exact component={Zero}/>
			<Route path="/profile/echo" exact component={Echo}/>
			<Route path="/profile/brian" exact component={Brian}/>
			<Route path="/profile/haylox" exact component={Haylox}/>
			<Route path="/profile/levi" exact component={Levi}/>
			<Route path="/profile/void" exact component={Void}/>
			<Route path="/profile/ethan" exact component={Ethan}/>
			<Route path="/profile/jhinxx" exact component={Jhinxx}/>
			<Route path="/careers" exact component={Careers}/>
			<Route path="/faq" exact component={Faq}/>
			<Route path="/apply" exact component={Apply}/>
			<Route path="/team" exact component={Team}/>
			<Route path="/job/editor" exact component={Job1}/>
			<Route path="/job/graphics" exact component={Job2}/>
		</Switch>
	</BrowserRouter>
);