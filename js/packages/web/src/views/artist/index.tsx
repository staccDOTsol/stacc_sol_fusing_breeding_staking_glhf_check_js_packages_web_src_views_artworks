import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link, useParams } from 'react-router-dom';
import { ArtCard } from '../../components/ArtCard';
import { CardLoader } from '../../components/MyLoader';
import { useCreator, useCreatorArts } from '../../hooks';

export const ArtistView = () => {
 

  return (
    <>
      <Link to={`/disco`} target="_blank">
        <Button className="app-btn">Discord</Button>
      </Link> 
      <Link to={`/de`} target="_blank">
        <Button className="app-btn">Verified DigitalEyes Collection</Button>
      </Link>
      <Link to={`/medium`} target="_blank">
        <Button className="app-btn">Medium</Button>
      </Link>
      <Link to={`/twitter`} target="_blank">
        <Button className="app-btn">Twitter</Button>
      </Link>
    </>
  );
};
