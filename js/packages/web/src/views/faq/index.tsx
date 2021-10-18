import React, { useState } from 'react';
import {
  Row,
  Col,
  Divider,
  Layout,
  Tag,
  Button,
  Skeleton,
  List,
  Card,
} from 'antd';
import { useParams } from 'react-router-dom';
import { useArt, useExtendedArt } from '../../hooks';

import { ArtContent } from '../../components/ArtContent';
import { shortenAddress, useConnection } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { MetaAvatar } from '../../components/MetaAvatar';
import { sendSignMetadata } from '../../actions/sendSignMetadata';
import { ViewOn } from '../../components/ViewOn';
import { ArtType } from '../../types';
import { ArtMinting } from '../../components/ArtMinting';

const { Content } = Layout;

export const FaqView = () => {
  

  return (
    <Content>
<div className="info-header">
NOTE: It takes a few minutes to actually MINT and you'll be asked to APPROVE a half of dozen TRANSACTIONS. 
      <br />      <br />


We will give you a random CREATOR SHARE PERCENTAGE (X%, max 75%) out of the random ROYALTIES PERCENTAGE (y%, max 5 to 25% decreasing with rarity). So we'd love for people to team up and JOIN US TOGETHER You can share with a friend your REFERRAL CODE.
      <br />
      <br />

When you SHARE your REFERRAL CODE you then have the possibility of getting the other max 25% creator share! 
      <br />      <br />


Do take NOTE the ACTUAL CALCULATION  for the ROYALTIES is designed as such:  RANDOM(0-25) / (RARITY+1) 
      <br />      <br />


The ONLY REASON this could possibly BE SLOW or NON-FUNCTIONAL in NORMAL OPERATIONS is if you have the WRONG LINK so please ensure that you are on https://stacc.art -  TAKE NOTICE: The "S" in "HTTPS" 
      <br />
      <br />

If your wallets REMOTE PROCEDURE CALL (RPC) connection is SLOW. Try SOLLET, they have a backup RPC. More ideas to fix this in #faqs on discord. Or, run a RPC server on your own NODE
      <br />  

      <br />
$STACC Strategic Tactics RPG Units Can Be Male, Female, Sometimes Monsters. After A Sale That Class Cannot Be Minted Further. Randomized Base Stats, Modified By Job, Equipment, Consumables, Skills, Training. 0 $SOL Mint. You And Your Referrer Get A Random % Share Of Random % Royalties. Different Max. Cap. Per Drop. If You Have Any Issues, Please Join Discord!  <br /> <br />

Each generation has a set max cap, and will never be available for mint after its initial sale. 1st gen max. cap. was 4000, of which about 2400 were minted at 0-price and about 0.022 in fees. 2nd gen max. cap. is 1000, of which so far 536 are minted, the average price so far was about 0.05 per mint - starting at 0 plus fees and increasing with each mint - and all further mints in this current sale have been set to a flat 0.1. Future gens, for now, will cost 0+fees. Each gen will have a different max cap.  <br /> <br />The collection has no max. cap. <br /> <br />Degens, apes, autists alike are incentivized to hodl:  <br /> <br />in v0.2.1 release, in a day or two, hodlers can train in LevelingPens. $STACC LPs are different staking options to increase their metadata stats.  <br /> <br />Alternatively, a few days after that, you can stake your characters in v0.2.2 to go on AdventureQuests to earn eXperiencePoints, GoldPoints, JobPoints metadata stats.  <br /> <br />A few days after that, these points earned can be burned in v0.2.3 for equipment or consumables (GP), skills and job leveling (JP) or character leveling (XP). Job leveling allows a unit in your army to move through the job tree, which is standard for sentient races and allows these races to change jobs at will after unlocking them - while monster trees are linear, and a path chosen is a path committed to.  <br /> <br />Couple more days we'll see v0.2.4, and onchain versions of these points will be released. People can now redeem metadata points for onchain tokens and vice versa.  <br /> <br />The community have expressed an interest in releases after this that are on the roadmap. These include some stuff like:  <br /> <br />Monster breeding (where hodlers can stake their males as studs, and females keep the babies) <br /> <br />PvP matches (manual? matchmaker?) with optional no-limit stakes volunteered by the players - winner takes the pot <br /> <br /> Mounts/familiars/pets each unit might care for (that can potentially breed)  <br /> <br />Potentially a 'fusion' where two units are burned and a new unit is minted (knight+dagron=dragonlance, slime+slime=sublime #SlimeGang)... <br /> <br />... and probably most importantly is the holy grail v1.0.0rc1 push: the full Strategic Tactical RPG experience, with added in Massively Multiplayer benefits. $STACC fully incorporates different aspects of both mutable and immutable onchain data as well as the economics of tokenomics. We'll scale tokens that are both fungible and not - and capitalize on new and interesting standards, kinda like I did when I hacked CandyMachine general release all to fuck within a few days to enable all this. <br /> <br /> People's efforts to play the game will be met with success whether they pay2play or grind their way to the best weird little variant of chess there ever was :) Except we'll probably opt for hex.
   </div> </Content>
  );
};
