import React from "react";
import "./style.css";
import "./images/graph.png";
import makeStyles from "@emotion/styled";
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
    card: {
        minWidth: 350,
        maxWidth: 350,
        minHeight: 250,
        borderRadius: 5,
        '&:hover': {
            boxShadow: `0 6px 12px 0 #000000
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`
            ,
        },
    },
    media: {
        height: 140
    },
    actionArea: {
        padding: 15,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',

        },
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    return (
        <CardActionArea className={classes.actionArea} m={20}>
            <Card
                className={classes.card}
            >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    src={props.card.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"  >
                        {props.card.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.card.description}
                    </Typography>
                    <ExpandMoreIcon />
                </CardContent>
            </Card>
        </CardActionArea>
    );
}





