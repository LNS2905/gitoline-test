import React from 'react'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {PlayersData} from '../shared/ListOfPlayers'
export default function PlayersDemo() {
  const [player, setPlayer] = useState([])
    return (
    <div className='container'>
        {PlayersData.map((player)=>(
           <div className='column'>
           <div className='card'>
           <img alt='' src={player.img}/>
             <h3 className='player-name'>{player.name}</h3>
             <p className='title'>{player.club}</p>
             <p><button className='bt' onClick={()=>{setPlayer(player)}}><a className='pop' href='#popup1' id='openPopUp'>View</a></button></p>
             <Link to={`detail/${player.id}`}> 
              <p><button className='dbt'>Detail</button></p>
             </Link>
           </div>
         </div>
        ))}
        <div id='popup1' className='overlay'>
           <div className='popup'>
            <img alt='' src={player.img}/>
            <h2>{player.name}</h2>
            <a className='close' href="/#">close</a>
            <div className='content'>
              {player.info}
            </div>
           </div>
        </div>
    </div>
  )
}


