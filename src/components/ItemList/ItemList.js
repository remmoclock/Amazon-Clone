import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Item from "../Item/Item";
import { data } from "../../data/data";

const styles = makeStyles({
  itemList: {
    marginTop: "-20rem",
    marginBottom: "4rem",
  },
});

function ItemList({addItem}) {
  const classes = styles();
  return (
    <Grid className={classes.itemList} container spacing={3}>
      {data.map((item) => (
        <Grid key={item.id} item md={3}>
          <Item
          addItem={addItem}
            item={item}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemList;
