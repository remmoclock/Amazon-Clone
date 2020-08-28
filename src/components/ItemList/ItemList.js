import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Item from "../Item/Item";
import { data } from "../../data/data";

const styles = makeStyles((theme) => ({
  itemList: {
    padding: "0.2rem",
    marginTop: "-25rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
}));

function ItemList({ addItem, basket }) {
  const classes = styles();
  return (
    <Grid className={classes.itemList} container spacing={3}>
      {data.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <Item basket={basket} addItem={addItem} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemList;
