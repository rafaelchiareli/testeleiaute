import React from "react";
import { Card, Button } from 'react-bootstrap'
import * as Incone from 'react-icons/hi'
import  '../App.css'

const CardDireita = ({ texto, iconeGrande, iconePequeno, textoMenor }) => {
    return (

        <Card className="cardDireita" style={{ width: '110%', marginTop: 10 }}>
            <div>
                <div style={{ display: "flex" }}>
                    <div>
                        {iconeGrande}
                    </div>
                    <div className="col" style={{ marginLeft: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div style={{}}>
                            <label style={{ fontSize: '1.1rem' }}>
                                {texto}
                            </label>
                            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                                {iconePequeno}

                                <label className="text-muted" style={{ fontSize: '0.95rem' }}>
                                    {textoMenor}
                                </label>

                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex",width: '10%' ,alignItems: 'center', justifyContent: "center", }}>
                <Incone.HiDotsHorizontal></Incone.HiDotsHorizontal>

            </div>

                </div>
            </div>
       
        </Card>

    )
}

export default CardDireita;