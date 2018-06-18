import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Grow from '@material-ui/core/Grow';
import PostCard from '../PostCard';
import PostGridContainer from './Container';
import posed from 'react-pose';

const styles = theme => ({
  root: {
    padding: '0 12px',
    margin: '0 auto'
  },
  grid: {
    marginTop: 0
  },
  sqr: {
    width: '100px',
    height: '100px',
    background: 'red'
  }
});

const parentProps = {
  open: {
    staggerChildren: 50
  },
  closed: {
    staggerChildren: 20
  }
};
const itemProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 100 }
};

const ParentPose = posed.div(parentProps);
const ItemPose = posed.div(itemProps);

class PostGrid extends Component {
  state = { hovering: false, isOpen: false };
  componentDidMount() {
    setTimeout(this.toggle, 100);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const { posts, classes, currentUser } = this.props;
    return (
      <div className={classes.root}>
        <ParentPose pose={isOpen ? 'open' : 'closed'}>
          <Grid container spacing={24} className={classes.grid} alignItems="stretch">
            {posts &&
              posts.map((post, i) => (
                // <Grow in >
                <Grid item xs={12} md={6} lg={4} key={post.id || post.title}>
                  <ItemPose style={{ opacity: 0 }}>
                    <PostCard post={post} currentUser={currentUser} />
                  </ItemPose>
                </Grid>
                // </Grow>
              ))}
            {posts.length === 0 && (
              <Grid item xs={12}>
                <p>No items do display</p>
              </Grid>
            )}
          </Grid>
        </ParentPose>
      </div>
    );
  }
}

// const PostGrid = ({ posts, classes, currentUser }) => {
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24} className={classes.grid} alignItems="stretch">
//         {posts &&
//           posts.map((post, i) => (
//             <Grow in key={post.id || post.title}>
//               <Grid item xs={12} md={6} lg={4}>
//                 <PostCard post={post} key={post.id} currentUser={currentUser} />
//               </Grid>
//             </Grow>
//           ))}
//         {posts.length === 0 && (
//           <Grid item xs={12}>
//             <p>No items do display</p>
//           </Grid>
//         )}
//       </Grid>
//     </div>
//   );
// };

PostGrid.propTypes = {
  posts: PropTypes.array.isRequired
};
export const PostGridWithStyles = withStyles(styles)(PostGrid);

export default () => (
  <PostGridContainer>{(posts, me) => <PostGridWithStyles posts={posts} currentUser={me} />}</PostGridContainer>
);
