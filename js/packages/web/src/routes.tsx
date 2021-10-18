 
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  HomeView,
  AuctionsView,
  AdminView,
  FaqView,
  LinksView
} from './views';
import { BillingView } from './views/auction/billing';
  

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
             <Route exact path="/admin" component={() => <AdminView />} />
            <Route
              exact
              path="/analytics"
              component={() => <AnalyticsView />}
            />
            <Route
              exact
              path="/art/create/:step_param?"
              component={() => <ArtCreateView />}
            />
            <Route
              exact
              path="/artworks/:id?"
              component={() => <ArtworksView />}
            />
       <Route path='/disco' component={() => { 
                 window.location.href = 'https://discord.gg/WUTFtgDhXd'; 
                 return null;
            }}/>
       <Route path='/de' component={() => { 
                 window.location.href = 'https://digitaleyes.market/collections/Solana%20Tactical%20RPG%20STACC'; 
                 return null;
            }}/>
      <Route path='/twitter' component={() => { 
                 window.location.href = 'https://twitter.com/SolanaTacc/status/1437143279347421188'; 
                 return null;
            }}/>
            
            <Route path='/medium' component={() => { 
                 window.location.href = 'https://medium.com/@staccnft'; 
                 return null;
            }}/>
 <Route exact path="/art/:id" component={() => <ArtView />} />
            <Route exact path="/artists/:id" component={() => <ArtistView />} />
            <Route exact path="/artists" component={() => <ArtistsView />} />
            <Route
              exact
              path="/auction/create/:step_param?"
              component={() => <AuctionCreateView />}
            />
            <Route
              exact
              path="/auction/:id"
              component={() => <AuctionView />}
            />
            <Route
              exact
              path="/auction/:id/billing"
              component={() => <BillingView />}
            />
            <Route path="/auctions" component={() => <AuctionsView />} />
            <Route path="/" component={() => <HomeView />} />
            <Route path="/:ref" component={() => <HomeView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
