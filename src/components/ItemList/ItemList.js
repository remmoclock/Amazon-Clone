import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import Item from '../Item/Item'

// const styles = makeStyles({
//     home: {
//         maxWidth: 1300,
//         margin: "0 auto"
//     },
//     homePic: {
//         width: "100%",
//         objectFit: "contain",
//     }
// });

function ItemList() {
    return (
        <Grid container spacing={3}>
            <Grid md={3}>
                <Item />
            </Grid>
        </Grid>
    )
}

export default ItemList
