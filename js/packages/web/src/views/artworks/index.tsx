import React, { useEffect, useState } from 'react';
import { ArtCard } from '../../components/ArtCard';
import { Layout, Row, Col, Tabs, Button } from 'antd';
import Masonry from 'react-masonry-css';

import { Link } from 'react-router-dom';
import { useCreatorArts, useUserArts } from '../../hooks';
import { useMeta } from '../../contexts';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_RENT_PUBKEY, TransactionInstruction, Keypair } from '@solana/web3.js';
import { CardLoader } from '../../components/MyLoader';
import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { Provider, Program, web3, BN} from '@project-serum/anchor';
import { Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
  
import { useConnection, useWalletModal,  sendTransactionWithRetry, updateMetadata,getMetadata, Data, decodeMetadata,
  Metadata,
  getMultipleAccounts,
  cache,
  MintParser,
  Creator,
  ParsedAccount, } from '@oyster/common';
  var link
import {

  PAYMENT_WALLET,
} from './helpers/constants';
import {

  sendTransactionWithRetryWithKeypair,
} from './helpers/transactions';
import {
  chunks,
  fromUTF8Array,
  loadCache,
  parsePrice,
  saveCache,
  upload,
} from './helpers/various';
import {
  createConfig,
loadWalletKey,
  getCandyMachineAddress,
    loadAnchorProgram,

} from './helpers/accounts';
const { TabPane } = Tabs;
//import { themd } from '../../contexts/meta/metadata.json'
//const metadata = JSON.parse(JSON.stringify(themd))   

const { Content } = Layout;

export enum ArtworkViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}
let minters = []
let referrers = []
let results = {'BadMale': 0, 'Male': 0, 'Female': 0, 'BadFemale': 0, 'Dagron': 0, 'Slime': 0}
export const ArtworksView = () => {
const { metadata, isLoading } = useMeta();
     const wallet = useWallet();
  const connection = useConnection();
  const { connected, publicKey } = useWallet();
  const ownedMetadata = useUserArts();
  const createdMetadata = useCreatorArts(publicKey?.toBase58() || '');
  //const { metadata, isLoading } = useMeta();
//const metadata = JSON.parse(JSON.stringify(themd))   
//let isLoading = true 
//if (metadata.length > 0){
//  isLoading = false
//}
  let goodgood = []
  referrers = []
  minters = []
  let referrersa = []
  let mintersa = []
  let resultst =  {'BadMale': 0,  'Male': 0, 'Female': 0, 'BadFemale': 0, 'Dagron': 0, 'Slime': 0}
  for (var v in metadata){
    var gogo = false 
   if (metadata[v].info.data.creators[2] != undefined){
     
      for (var m in minters){
      if (minters[m].name == metadata[v].info.data.creators[2].address){
        gogo = true
        minters[m].count++
      }
      }
      if (!gogo){

        minters.push({'name': metadata[v].info.data.creators[2].address, 'count': 1})
      }
    }
       gogo = false 
   if (metadata[v].info.data.creators[3] != undefined){
     
      for (var m in referrers){
      if (referrers[m].name == metadata[v].info.data.creators[3].address){
        gogo = true
        referrers[m].count++
      }
      }
      if (!gogo){

        referrers.push({'name': metadata[v].info.data.creators[3].address, 'count': 1})
      }
}
    if(metadata[v].info.updateAuthority == 'F9fER1Cb8hmjapWGZDukzcEYshAUDbSFpbXkj9QuBaQj'){
      if(!Object.keys(resultst).includes(metadata[v].info.data.name.split(' ')[0])){
        resultst[metadata[v].info.data.name.split(' ')[0]] = 0
      }
      resultst[metadata[v].info.data.name.split(' ')[0]]++
      goodgood.push(metadata[v].info.mint)


    }
    else {
      if(!Object.keys(resultst).includes(metadata[v].info.data.name.split(' ')[0])){
        resultst['Bad' + metadata[v].info.data.name.split(' ')[0]] = 0
      }
      resultst['Bad' + metadata[v].info.data.name.split(' ')[0]]++
    }
  }
  minters.sort(function(a, b){
    return b.count - a.count;
});

referrers.sort(function(a, b){
    return b.count - a.count;
});

for (var m in minters){
minters[m].place = parseInt(m)+1
}

for (var m in referrers){
referrers[m].place = parseInt(m)+1
}
  //console.log(minters)
  console.log(goodgood)
  console.log(goodgood.length)
  results = resultst
  const [activeKey, setActiveKey] = useState(ArtworkViewState.Metaplex);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const items =
    activeKey === ArtworkViewState.Owned
      ? ownedMetadata.map(m => m.metadata)
      : activeKey === ArtworkViewState.Created
      ? createdMetadata
      : metadata;
console.log(items)
  useEffect(() => {
    if (connected) {
      setActiveKey(ArtworkViewState.Owned);
    } else {
      setActiveKey(ArtworkViewState.Metaplex);
    }
  }, [connected, setActiveKey]);
    
    const fix = async ( {wallet, connection}:  {wallet: WalletContextState, connection: Connection}) => {
var rarity 
var walletKeyPair = loadWalletKey('./jarekey.json');

for (var i in items){
try {
var tokenmd = items[i].info.data
var theua = items[i].info.updateAuthority

var arweave123 = (await (await fetch(tokenmd.uri, {
      method: 'GET'
    })).text())
var jsmetadata = JSON.parse(arweave123)

console.log('tmd')
console.log(tokenmd)

let av 
let gogo2 = true
  for (var v in jsmetadata.attributes){
     if (jsmetadata.attributes[v].trait_type == 'Art Version'){
      av = parseInt(jsmetadata.attributes[v].value)
gogo2 = false
     }
     }
    if (gogo2 && jsmetadata.name.indexOf('Slime') != -1){
      
      jsmetadata.attributes.push({'trait_type': 'Art Version', 'value': '2.0'})

if (true){
//console.log(jsmetadata)

  let temp = 75
  tokenmd.creators = [(new Creator({
                  address: wallet.publicKey.toBase58(),
                  verified: false,
                  share: 75})), (new Creator({
                  address: walletKeyPair.publicKey.toBase58(),
                  verified: false,
                  share: 25}))]
}
//console.log(tokenmd)
  //tokenmd.seller_fee_basis_points = ((tokenmd.seller_fee_basis_points as any)/ 4)
  jsmetadata.seller_fee_basis_points = 500
  //jsmetadata.sellerFeeBasisPoints = jsmetadata.seller_fee_basis_points
  //tokenmd.sellerFeeBasisPoints = tokenmd.seller_fee_basis_points

 const provider = new Provider(connection, {
        ...wallet.wallet,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
        publicKey: wallet.publicKey
      }, {
        preflightCommitment: 'recent',
      }); 

    const updateInstructions: TransactionInstruction[] = [];
    const updateSigners: Keypair[] = [walletKeyPair];

  var gogo = true
  for (var v in jsmetadata.attributes){
     if (jsmetadata.attributes[v].trait_type == 'Rarity'){
      rarity = parseInt(jsmetadata.attributes[v].value)
gogo = false
     }
     }
    if (gogo){
      for (var v in jsmetadata.attributes){
        try{
          if (parseFloat(jsmetadata.attributes[v].value) > 0){
          jsmetadata.attributes[v].value = (parseFloat(jsmetadata.attributes[v].value) * 2).toString()
        }
      }
        catch(er){

        }
      }
      jsmetadata.attributes.push({'trait_type': 'Rarity', 'value': '4.1'})
}
const image = '0.png'
      //const imageName = path.basename(image);
      const index = '0';//ran.toString()

      //console.log(`Processing file: ${index}`);
var sex = 'progenitor/0.png'
if (tokenmd.name.includes('Female')){

for (var v in jsmetadata.attributes){
        try{
         if( jsmetadata.attributes[v].trait_type == 'Job'){
          if (jsmetadata.attributes[v].value == 'medic'){

          sex = 'progenitorf/0.png'
          }
          else { 
          sex = 'progenitorf/1.png'
         }
       }
        }
        catch(er){

//console.log(er)
        }
      }
}
else if (tokenmd.name.includes('Male')){

for (var v in jsmetadata.attributes){
        try{
         if( jsmetadata.attributes[v].trait_type == 'Job'){
          if (jsmetadata.attributes[v].value == 'medic'){

          sex = 'progenitor/0.png'
          }
          else { 
          sex = 'progenitor/1.png'
         }
       }
        }
        catch(er){
//console.log(er)
        }
  
      }
}

else if (tokenmd.name.includes('Dagron')){
sex = 'dagron/0.png'
}

else if (tokenmd.name.includes('SG')){
sex = '0.png'
}
else if (tokenmd.name.includes('DK')){
sex = '1.png'
}
else if (tokenmd.name.includes('Slime')){
sex = 'slime/' + Math.floor(Math.random() * 12) + '.png'
}
      const storageCost = 10;
  // //console.log(manifest)
  jsmetadata.image = "image.png"
      var        sfbb = Math.floor(Math.floor(Math.random() * (10000 - 100)) / (rarity + 1) ) + 100
jsmetadata.creators = tokenmd.creators
jsmetadata.seller_fee_basis_points = Math.floor((sfbb) / 4.0)
        const manifestBuffer = Buffer.from(JSON.stringify(jsmetadata));
const bytes = new TextEncoder().encode(JSON.stringify(jsmetadata));
const mblob = new Blob([bytes], {
    type: "application/json;charset=utf-8"
});

         var response2 = await fetch('https://stacc.art/img/' + sex, {
      method: 'GET',
      headers: {
        'Accept': 'image/png',
        'Content-Type': 'image/png',
      },
    })

         const lala123 = await (response2.blob());

          const instructions = [
            web3.SystemProgram.transfer({
              fromPubkey: wallet.publicKey, 
              toPubkey: PAYMENT_WALLET,
              lamports: storageCost,
            }),
          ];        

          const tx = await sendTransactionWithRetry(
            provider.connection,
        wallet,
        instructions,
        [],
        'single',
          );
          console.info('transaction for arweave payment:', tx);
////console.log(manifest)
          // data.append('tags', JSON.stringify(tags));
          // payment transaction
          const data = new FormData();
          data.append('transaction', tx['txid']);
          data.append('env', 'mainnet-beta');
          data.append('file[]', lala123,  `image.png`);
          data.append('file[]', mblob, 'metadata.json');
            const result = await upload(data, jsmetadata, 0);

            const metadataFile = (result as any).messages?.find(
              m => m.filename === 'manifest.json',
            );
            if (metadataFile?.transactionId) {
              link = `https://arweave.net/${metadataFile.transactionId}`;
            }

const thedata = new Data({
        name: tokenmd.name,
        symbol: tokenmd.symbol,
        uri: link,
        creators: tokenmd.creators,
        sellerFeeBasisPoints: jsmetadata.sellerFeeBasisPoints,
      })
let theupdatedupdateauthority = theua 
if (theupdatedupdateauthority == "F9fER1Cb8hmjapWGZDukzcEYshAUDbSFpbXkj9QuBaQj"){
  theupdatedupdateauthority = undefined
}
//console.log(thedata)
    // TODO: connect to testnet arweave
    await updateMetadata(
       thedata,
      theupdatedupdateauthority,
      true,
         items[i].info.mint,//mintkey??
      theua,//payer
      updateInstructions,
    );
    //console.log(updateInstructions)

      try { 
    const txid = await sendTransactionWithRetry(
      connection,
      wallet,
      updateInstructions,
      updateSigners,
    );
    console.log(txid)
}
catch(err){

    console.log(err)
    console.log(tokenmd.creators)
}
}
}
 catch(err){
  console.log(err)
  console.log(tokenmd.creators)
 }
}
}

  const artworkGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  height={250}
                  width={250}
                />
              </Link>
            );
          })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
 <Menu>
                <Menu.Item>
        <Button className="app-btn">{results.Male} Male Progenitors</Button>
              </Menu.Item>

              <Menu.Item>    
        <Button className="app-btn">{results.Female} Female Progenitors</Button>
              </Menu.Item>


              <Menu.Item>      
        <Button className="app-btn">{results.Slime} Slimes</Button>
              </Menu.Item>

              <Menu.Item>      
        <Button className="app-btn">{results.Dagron} Dagrons</Button>
              </Menu.Item>
            </Menu>
         
  <Button type="primary" className="app-btn" onClick={ function(){  if (!wallet.connected){ wallet.connect() } else { fix({wallet, connection})}}}>
      
        {!wallet.connected ? 'Connect' : 'Update Metadata To Fix Stuff'} 
      </Button>{' '}  <br />

      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>
          <Row>
            <Tabs
              activeKey={activeKey}
              onTabClick={key => setActiveKey(key as ArtworkViewState)}
            >
              {connected && (
                <TabPane
                  tab={<span className="tab-title">Owned</span>}
                  key={ArtworkViewState.Owned}
                >
                  {artworkGrid}
                </TabPane>
              )}
            </Tabs>
          </Row>
        </Col>
      </Content>

      <Menu
      >
        <Row className="call-to-action" style={{ marginBottom: 0 }}>
          <h2>MINTED items counts!</h2>
        </Row>
        <Row
          className="content-action"
          style={{ overflowY: 'auto', height: '50vh' }}
        >
            {minters.map(m => {

              return (
                <Menu.Item>      
        <Button className="app-btn">#{m.place}: {m.name}: {m.count}</Button>
              </Menu.Item>
              );
            })}
        </Row>
      </Menu>

      <Menu
      >
        <Row className="call-to-action" style={{ marginBottom: 0 }}>
          <h2>REFERRED items counts!</h2>
        </Row>
        <Row
          className="content-action"
          style={{ overflowY: 'auto', height: '50vh' }}
        >

            {referrers.map(m => {

              return (
                <Menu.Item>      
        <Button className="app-btn">#{m.place}: {m.name}: {m.count}</Button>
              </Menu.Item>
              );
            })}
        </Row>
        </Menu>
    </Layout>
  );
};