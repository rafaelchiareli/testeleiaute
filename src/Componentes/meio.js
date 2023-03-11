import React from 'react';
import { Button, Card, Form , Figure} from 'react-bootstrap';
import '../App.css';
import * as Icone from 'react-icons/fa'
import * as IconeColor from 'react-icons/fc'
import Foto from '../assets/foto.png'

const Meio = () => {

    return (
        <div className='meio'>
            <div style={{ display: 'flex', marginLeft: 20, marginTop: 20, width: '100%', justifyContent: 'space-between'}}>
                <div style={{ position: 'relative', float: 'left', marginLeft: 25 }}>
                    <label style={{ fontSize: '2rem', fontWeight: 'bold' }}>Dashboard</label>
                </div>
                <div style={{ display: 'flex', marginRight: 47, justifyContent: 'center', gap: 10, marginTop: 5 }}>
                    <div>
                        <Button variant='light'>
                            <Icone.FaSearch></Icone.FaSearch>
                        </Button>
                    </div>
                    <div>
                        <Form.Control type='date' placeholder='Date and Time'></Form.Control>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <div>

                            <Button variant='light'>
                                <Icone.FaAlignCenter></Icone.FaAlignCenter>
                            </Button>
                        </div>
                        <div>

                            <Button >
                                <Icone.FaBroadcastTower></Icone.FaBroadcastTower>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <Card style={{ marginLeft: 10,marginTop: 20 , width: '98%', padding: 25}}>
                    <div style={{ display: 'flex' , gap: 8}}>
                        <div className='cardMeio'>
                            <IconeColor.FcBearish style={{ width: 60, height: 60 }}></IconeColor.FcBearish>
                        </div>
                        <div>
                            <h5>vla bla njkajkahk aahjka </h5>
                            <p>hajkhajjkajkahjkahjakhajkhajkahjkhajkahjkahjkahjkahjka</p>
                        </div>
                    </div>
                    <hr className='linhaCard'></hr>
                    <div>
                    <IconeColor.FcCommandLine style={{ width: 30, height: 30 }}></IconeColor.FcCommandLine>
                    <label>Tteuiiuey hjekhjke hjkehekj</label>
                    </div>
                </Card>
                <Card style={{ marginLeft: 10,marginTop: 20 , width: '98%', padding: 25}}>
                    <div style={{ display: 'flex' , gap: 8}}>
                        <div className='cardMeio'>
                            <IconeColor.FcMoneyTransfer style={{ width: 60, height: 60 }}></IconeColor.FcMoneyTransfer>
                        </div>
                        <div>

                        <div style={{}}>
                            <h5>vla bla njkajkahk aahjka </h5>
                            <p>hajkhajjkajkahjkahjakhajkhajkahjkhajkahjkahjkahjkahjka</p>
                        </div>
                       
                        </div>
                    </div>
                    <div style={{ display: 'flex' , gap: 10, marginLeft: 100}}>
                            <Button variant='primary'>Aprovar</Button>
                            <Button variant='outline-primary'>Reprovar</Button>
                        </div>
                    <hr className='linhaCard'></hr>
                    <div>
                    <IconeColor.FcMediumPriority style={{ width: 30, height: 30 }}></IconeColor.FcMediumPriority>
                    <label>Tteuiiuey hjekhjke hjkehekj</label>
                    </div>
                </Card>
                <Card style={{ marginLeft: 10,marginTop: 20 , width: '98%', padding: 25}}>
                    <div style={{ display: 'flex' , gap: 8}}>
                        
                        <div className='cardMeio'>
                            <IconeColor.FcAndroidOs style={{ width: 60, height: 60 }}></IconeColor.FcAndroidOs>
                        </div>
                        <div>
                            <h5>vla bla njkajkahk aahjka </h5>
                            <p>hajkhajjkajkahjkahjakhajkhajkahjkhajkahjkahjkahjkahjka</p>
                        </div>
                        <div style={{display: 'flex' , width: '100%', justifyContent: 'flex-end'}}>
                        <Figure.Image style={{borderRadius: 5}} width={80} height={80} src={Foto}></Figure.Image>
                        </div>
                    </div>
                    <hr className='linhaCard'></hr>
                    <div style={{}}>
                    <IconeColor.FcTrademark style={{ width: 30, height: 30 }}></IconeColor.FcTrademark>
                    <label>Tteuiiuey hjekhjke hjkehekj</label>
                    </div>
                </Card>

                <Card style={{ marginLeft: 10,marginTop: 20 , width: '98%', padding: 25}}>
                    <div style={{ display: 'flex' , gap: 8}}>
                        <div className='cardMeio'>
                            <IconeColor.FcBearish style={{ width: 60, height: 60 }}></IconeColor.FcBearish>
                        </div>
                        <div>
                            <h5>vla bla njkajkahk aahjka </h5>
                            <p>hajkhajjkajkahjkahjakhajkhajkahjkhajkahjkahjkahjkahjka</p>
                        </div>
                    </div>
                    <hr className='linhaCard'></hr>
                    <div>
                    <IconeColor.FcCommandLine style={{ width: 30, height: 30 }}></IconeColor.FcCommandLine>
                    <label>Tteuiiuey hjekhjke hjkehekj</label>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default Meio
