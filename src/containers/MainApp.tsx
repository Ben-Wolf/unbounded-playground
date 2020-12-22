import * as React from 'react';
import { Box, Button, Collapsible, Footer, Header, Main, Menu } from 'grommet';
import * as Icons from 'grommet-icons';
import { lightPurpleHex } from '../utils/contsants';

const MainAppHeader: React.FC = (_) => {
  return (
    <div className='main-app-header-placeholder'>
      <div className='main-app-header'>
        <Header background={lightPurpleHex}>
          <Button icon={<Icons.Home />} hoverIndicator />
        </Header>
      </div>
    </div>
  );
}

const MainAppFooter: React.FC = (_) => {
  return (
    <div className='main-app-footer'>
      <Footer background={lightPurpleHex}>
        {/* Footer Content */}
      </Footer>
    </div>
  )
}

export const MainApp: React.FC = (props) => {
  return (
    <div>
      <MainAppHeader />
        <Main pad="small">

        </Main>
      <MainAppFooter />
    </div>
  )
}