import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import './MediaGrid.css';

interface IState {
    front_sprite: string;
    back_sprite: string;
    name: string;
    height: number;
    weight: number;
    hp: number;
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
    spd: number;
}
interface IMediaGridProps {
    SearchQuery: (string | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [ItemArray, setItemArray] = useState<IState>({ 
        front_sprite:'',
        back_sprite:'',
        name:'',
        height:0,
        weight:0,
        hp:0,
        atk:0,
        def:0,
        spatk:0,
        spdef:0,
        spd:0
         });

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.SearchQuery)
            .then(response => response.json())
            .then(response => setItemArray({
                front_sprite:response.sprites.front_default,
                back_sprite:response.sprites.back_default,
                name:response.name,
                height:response.height,
                weight:response.weight,
                hp:response.stats[0].base_stat,
                atk:response.stats[1].base_stat,
                def:response.stats[2].base_stat,
                spatk:response.stats[3].base_stat,
                spdef:response.stats[4].base_stat,
                spd:response.stats[5].base_stat
            }))
            .then(() => setSuccess(true))
            .catch(() => setSuccess(false)
            );

    }, [props.SearchQuery]);

    if(isSuccess){

        return (
            <div>
                    <MediaCard 
                    front_sprite={ItemArray.front_sprite}
                    back_sprite={ItemArray.back_sprite}
                    name={ItemArray.name}
                    height={ItemArray.height}
                    weight={ItemArray.weight}
                    hp={ItemArray.hp}
                    atk={ItemArray.atk}
                    def={ItemArray.def}
                    spatk={ItemArray.spatk}
                    spdef={ItemArray.spdef}
                    spd={ItemArray.spd}
                    />
            </div>
        )
    } else {
        return (
            <div className="dataFindError">
                <h4>Unable to find data. </h4>
                <p>Please search for a pokemon using their name or their pokemon number</p>
            </div>
        )
    }
}



export default MediaGrid