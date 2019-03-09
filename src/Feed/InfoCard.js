import React, { Component } from 'react';
import './InfoCard.css'
import {Card, Button} from 'semantic-ui-react';

function InfoCard() {
    return(
        <div className='InfoCard'>
            <Card>
                <div className="cardContent">
                    <Card.Meta>Имя, возраст</Card.Meta>
                    <Card.Header>Берик, 24</Card.Header>

                    <Card.Meta>Город</Card.Meta>
                    <Card.Description>Караганда</Card.Description>

                    <Card.Meta>Интересы</Card.Meta>
                    <Card.Description>Реал Мадрид, Тачки, Караоке</Card.Description>
                    <Button className='cardButton fluid teal'>Посмотреть страницу</Button>
                </div>

            </Card>
        </div>
    )
}
export default InfoCard
