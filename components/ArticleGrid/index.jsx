import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  root: {
    padding: '0 12px'
  },
  grid: {
    marginTop: 0
  },
  item: {
    position: 'relative'
  },
  itemTextContainer: {
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.2)'
  }
});
class ArticleGrid extends Component {
  render() {
    const { items, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.grid}>
          {items &&
            items.map(it => (
              <Grid key={it.id || it.title} item xs={12} md={6} lg={4} className={classes.item}>
                <Card>
                  <CardContent>
                    <div>
                      <h3>{it.title}</h3>
                      <p>
                        <small>{it.createdAt}</small>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          {!items && (
            <Grid item xs={12}>
              <p>No items do display</p>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

ArticleGrid.propTypes = {
  items: PropTypes.array
};

export default withStyles(styles)(ArticleGrid);
