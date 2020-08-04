import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MediaCard.css';

interface IMediaCardProps {
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

function MediaCard(props: IMediaCardProps) {
    return (
        <div>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardMedia
                        className="MediaCardImage"
                        image={props.front_sprite}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            <h3>{props.name}</h3>
                            <table>

                                <tr>
                                    <td>Height</td>
                                    <td>{props.height}</td>
                                </tr>

                                <tr>
                                    <td>Weight</td>
                                    <td>{props.weight}</td>
                                </tr>

                                <tr>
                                    <td>HP</td>
                                    <td>{props.hp}</td>
                                </tr>

                                <tr>
                                    <td>Attack</td>
                                    <td>{props.atk}</td>
                                </tr>

                                <tr>
                                    <td>Defense</td>
                                    <td>{props.def}</td>
                                </tr>

                                <tr>
                                    <td>Special Attack</td>
                                    <td>{props.spatk}</td>
                                </tr>

                                <tr>
                                    <td>Special Defense</td>
                                    <td>{props.spdef}</td>
                                </tr>

                                <tr>
                                    <td>Speed</td>
                                    <td>{props.spd}</td>
                                </tr>
                            </table>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MediaCard