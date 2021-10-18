import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';

const UserActions = () => {
  const { publicKey } = useWallet();
  const pubkey = publicKey?.toBase58() || '';


  return (
    <>
      {publicKey && (
        <>
          {/* <Link to={`#`}>
            <Button className="app-btn">Bids</Button>
          </Link> */}
          {true ? (
            <Link to={`/art/create`}>
              <Button className="app-btn">Create</Button>
            </Link>
          ) : null}
          <Link to={`/auction/create/0`}>
            <Button className="connector" type="primary">
              Sell
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    > 
      <Link to={`/`} target="_blank">
        <Button className="app-btn">Mint!</Button>
      </Link>   
      <Link to={`/medium`} target="_blank" >
        <Button className="app-btn">Medium!</Button>
      </Link> 
      <Link to={`/disco`} target="_blank" >
        <Button className="app-btn">Discord!</Button>
      </Link> 
      
                <Link to={`/artworks`} target="_blank">
                  <Button className="app-btn">Beta Stuff!</Button>
                </Link>
    </div>
  );
};

const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const { connected } = useWallet();

  if (width < 768)
    return (
      <>
        <Dropdown
          arrow
          placement="bottomLeft"
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={`/`} target="_blank">
                  <Button className="app-btn">Mint!</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                
      <Link to={`/medium`} target="_blank" >
        <Button className="app-btn">Medium!</Button>
      </Link> 
              </Menu.Item>
              <Menu.Item>
                
      <Link to={`/disco`} target="_blank" >
        <Button className="app-btn">Discord!</Button>
      </Link> 
              </Menu.Item>
              <Menu.Item>
                <Link to={`/artworks`} target="_blank">
                  <Button className="app-btn">Beta Stuff!</Button>
                </Link>
              </Menu.Item>
            </Menu>
          }
        >
          <MenuOutlined style={{ fontSize: '1.4rem' }} />
        </Dropdown>
      </>
    );

  return <DefaultActions />;
};

export const AppBar = () => {
  const { connected } = useWallet();

  return (
    <>
      <div className="app-left app-bar-box">
        {window.location.hash !== '#/analytics' && <Notifications />}
        <div className="divider" />
        <MetaplexMenu />
      </div>
      {connected ? (
        <div className="app-right app-bar-box">
          <UserActions />
          <CurrentUserBadge
            showBalance={false}
            showAddress={false}
            iconSize={24}
          />
        </div>
      ) : (
        <ConnectButton type="primary" allowWalletChange />
      )}
    </>
  );
};
