import React from 'react';
import './App.css';

type CarsPropsType = {
    listCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string,
}

export function Cars(props: CarsPropsType) {
	return (
		<table>
            <tr><th colSpan={2}>Top cars</th></tr>
            <tr><th>Manufacturer</th><th>Model</th></tr>
            {props.listCars.map((el) => {
                return <tr><td>{el.manufacturer}</td><td className='models'>{el.model}</td></tr>
            })}            
        </table>
	)
}