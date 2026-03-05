import * as React from 'react';
import styles from './SonaEmd.module.scss';
import type { ISonaEmdProps } from './ISonaEmdProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import Sidebar from '../components/Pages/Sidebar';
import { InitiatorDashboard } from '../components/Pages/InitiatorDashboard';
import MyRequests from './Pages/MyRequests';
import ApprovalDashboard from './Pages/ApprovalDashboard';
import APTeamDashboard from './Pages/APTeamDashboard';
import ClosureApprovalARDashboard from './Pages/ClosureApprovalARDashboard';
import EMDClosureDashboard from './Pages/EMDClosureDashboard';
import TreasuryLandingPage from './Pages/TreasuryDashboard';

const SonaEmd: React.FC<ISonaEmdProps> = (props) => {
  const {
    description,
    isDarkTheme,
    environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = props;

    const location = useLocation(); // ✅ Now inside Router
 
 const hideSidebar =
    location.pathname === "/NewRequest" ||
    location.pathname.startsWith("/ViewRequest/") ||
    location.pathname.startsWith("/EditRequest/") ||
    location.pathname.startsWith("/ApprovalRequest/");
    
    return (
   
      <div className="container-fluid" style={{ display: 'flex', width: '100%' }}>
        {!hideSidebar && <Sidebar {...props} />}
        <div className="main">
          <Switch>
            <Route exact path="/" render={() => <InitiatorDashboard {...props} />} />
            <Route exact path="/MyRequests" render={() => <MyRequests {...props} />} />
            <Route exact path="/ApprovalDashboard" render={() => <ApprovalDashboard {...props} />} />
            <Route exact path="/APTeamDashboard" render={() => <APTeamDashboard {...props} />} />
            <Route exact path="/ClosureApprovalARDashboard" render={() => <ClosureApprovalARDashboard {...props} />} />
            <Route exact path="/EMDClosureDashboard" render={() => <EMDClosureDashboard {...props} />} />
            <Route exact path="/TreasuryLandingPage" render={() => <TreasuryLandingPage {...props} />} />

          </Switch>
        </div>
      </div>
   
  );
  }

const Drr: React.FC<ISonaEmdProps> = (props) => {
  return (
    <Router>
      <SonaEmd {...props} />
    </Router>
  );
};
 
export default Drr;