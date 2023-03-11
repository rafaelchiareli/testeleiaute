import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App.css'
import CardDireita from './cardDireita';
import * as IconeColor from 'react-icons/fc'


const Direita = () => {
    return (

        <div className='direita'>
            <div>

                <label className='tituloMenu'>Favoritos</label>
            </div>
            <div style={{display: 'flex' , flexDirection: 'column', marginTop: 20, alignItems: 'center'}}>
                <Tabs style={{ width: '100%', justifyContent: 'center'}}
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="nav nav-pills"
                >
                    <Tab  style={{width: '100%'}} eventKey="home" title="Home">
                        <CardDireita 
                        texto='Criar Evento'
                        textoMenor='Calendário' 
                        iconeGrande={<IconeColor.FcCalendar style={{width: 55, height: 55}}></IconeColor.FcCalendar>} 
                        iconePequeno={<IconeColor.FcNegativeDynamic></IconeColor.FcNegativeDynamic>}>

                        </CardDireita>
                        <CardDireita 
                        texto='Tarefas'
                        textoMenor='Relatório' 
                        iconeGrande={<IconeColor.FcSerialTasks style={{width: 55, height: 55}}></IconeColor.FcSerialTasks>} 
                        iconePequeno={<IconeColor.FcCamcorderPro></IconeColor.FcCamcorderPro>}>

                        </CardDireita>
                        <CardDireita 
                        texto='Reunião'
                        textoMenor='Marcar' 
                        iconeGrande={<IconeColor.FcAddImage style={{width: 55, height: 55}}></IconeColor.FcAddImage>} 
                        iconePequeno={<IconeColor.FcAdvertising></IconeColor.FcAdvertising>}>

                        </CardDireita>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Oi
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        Oi
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default Direita
