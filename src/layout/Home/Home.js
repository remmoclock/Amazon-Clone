import React from 'react'
import { makeStyles } from '@material-ui/core'
import backgroundImage from '../../assets/home-fade.png'
import ItemList from '../../components/ItemList/ItemList';

const styles = makeStyles({
    home: {
        maxWidth: 1300,
        margin: "0 auto"
    },
    homePic: {
        width: "100%",
        objectFit: "contain",
    }
});

const Home = () => {
    const classes = styles()
    return (
        <div className={classes.home}>
            <img className={classes.homePic} src={backgroundImage} alt=""/>
            <ItemList />
        </div>
    )
}

export default Home
