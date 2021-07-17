import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import itemData from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineImageList() {
  const classes = useStyles();
  console.log("hello");
  console.log(itemData.movies);
  // const arr = itemData.movies.map((item) => (
  //   <ImageListItem key={item.poster_url}>
  //     <img src={item.poster_url} alt={item.title} />
  //     <ImageListItemBar
  //       title={item.title}
  //       classes={{
  //         root: classes.titleBar,
  //         title: classes.title,
  //       }}
  //     />
  //   </ImageListItem>
  // ));
  // console.log("here is the array");
  // console.log(arr);

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6}>
        {itemData.movies.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
