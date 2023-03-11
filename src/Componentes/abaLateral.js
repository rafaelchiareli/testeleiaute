import '../App.css';
import * as Icone from 'react-icons/fa'
import * as IconeColorido from 'react-icons/fc'
import React, { useState } from 'react';
import { Collapse, Figure } from 'react-bootstrap';

import Photoshop from '../assets/photoshop.png'
import Chrome from '../assets/chrome.png'
import PowePoint from '../assets/powerpoint.png'
import Illustrator from '../assets/illustrator.png'
import Firefox from '../assets/firefox.png'
import OneNote from '../assets/onenote.png'

import Foto from '../assets/foto.png';

const AbaLateral = () => {
    const [open, setOpen] = useState(false);
    const [openApps, setOpenApps] = useState(false);
    return (

<div className='divLateral'>
<label className='tituloMenu'>Menu</label>

<div style={{ marginTop: 30 }}>
  <Icone.FaReact style={{ color: 'blue' }} className='icone'></Icone.FaReact>
  <label style={{ color: 'blue' }} className='menuItem'>Dashboard</label>
</div>
<hr></hr>
<div>
  <div style={{ marginTop: 0 }}>
    <IconeColorido.FcViewDetails style={{}} className='icone'></IconeColorido.FcViewDetails>
    <label style={{ fontWeight: 'bold' }} className='menuItem'>Actions</label>
    <Icone.FaAngleDown style={{ float: 'right', marginRight: 20 }}
      onClick={() => setOpen(!open)}
      aria-controls="collapseAction"
      aria-expanded={open}
    > </Icone.FaAngleDown>
  </div>
</div>
<Collapse in={open}>
  <div id="collapseAction">
    <div>
    </div>
  </div>
</Collapse>
<hr></hr>
<div>
  <div style={{ marginTop: 0 }}>
    <Icone.FaAppStore style={{}} className='icone'></Icone.FaAppStore>
    <label style={{ fontWeight: 'bold' }} className='menuItem'>Apps</label>
    <Icone.FaAngleDown style={{ float: 'right', marginRight: 20 }}
      onClick={() => setOpenApps(!openApps)}
      aria-controls="collapseApps"
      aria-expanded={openApps}
    > </Icone.FaAngleDown>
  </div>
</div>
<Collapse in={openApps}>
  <div id="collapseApps">
    <div style={{ marginTop: 15, marginLeft: 50, display: 'flex' }}>
      <Figure.Image width={20} height={20} src={Photoshop}></Figure.Image>
      <label style={{ fontWeight: 'bold' }} className='menuItem'>Photoshop</label>
    </div>

    <div style={{ marginTop: 15, marginLeft: 50, display: 'flex' }}>
      <Figure.Image width={20} height={20} src={Illustrator}></Figure.Image>
      <label style={{ fontWeight: 'bold' }} className='menuItem'>Illustrator</label>
    </div>
    <div style={{ marginTop: 15, marginLeft: 50, display: 'flex' }}>
      <Figure.Image width={20} height={20} src={PowePoint}></Figure.Image>
      <label style={{ fontWeight: 'bold' }} className='menuItem'>PowerPoint</label>
    </div>
    <div style={{ marginTop: 15, marginLeft: 50, display: 'flex' }}>
      <Figure.Image width={20} height={20} src={OneNote}></Figure.Image>
      <label style={{ fontWeight: 'bold' }} className='menuItem'>OneNote</label>
    </div>
    <div style={{ marginTop: 15, marginLeft: 50, display: 'flex' }}>
      <Figure.Image width={20} height={20} src={Chrome}></Figure.Image>
      <label style={{ fontWeight: 'bold' }} className='menuItem'>Chrome</label>
    </div>
    <div style={{ marginTop: 15, marginLeft: 50, display: 'flex' }}>
      <Figure.Image width={20} height={20} src={Firefox}></Figure.Image>
      <label style={{ fontWeight: 'bold' }} className='menuItem'>Firefox</label>
    </div>
  </div>
</Collapse>
<hr></hr>

<div >
  <Icone.FaDesktop className='icone'></Icone.FaDesktop>
  <label className='menuItem'>Desktops</label>
</div>
<hr></hr>
<div >
  <Icone.FaFile className='icone'></Icone.FaFile>
  <label className='menuItem'>Files</label>
</div>

<div style={{ height: '100%', display: 'flex', alignItems: 'flex-end' , justifyContent: 'center'}}>
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 13}}>
    <div style={{marginRight: -10}}>
      <Figure.Image style={{borderRadius: 25}} width={50} height={50} src={Foto}></Figure.Image>
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
    <label style={{ fontWeight: 'bold'}} className='menuItem'>Rafael Chiareli</label>
    </div>
  </div>
</div>
</div>

    )
}

export default AbaLateral