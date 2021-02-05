import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@material-ui/core";
import useStyles from "./style";

export default function MyWonderfulComponent(props) {
    let [summ, setSumm] = useState(props.count);

    useEffect(() => {
        setSumm(summ + 1);
    }, [summ]);

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid container item xs={12}>
                <Typography className="h1" variant="h1">Hello World!</Typography>
            </Grid>
            <Grid container item xs={12}>
                {props.children}
                {props.data.text}
            </Grid>
        </Grid>
    );
}