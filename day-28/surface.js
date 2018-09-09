// To construct a new Cylinder Surface in your app runtime:
import {Surface} from 'react-360-web';
const myCylinderSurface = new Surface(
  1000, /* width */
  600, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);

// To construct a new Flat Surface in your app runtime:
import {Surface} from 'react-360-web';
const myFlatSurface = new Surface(
  300, /* width */
  600, /* height */
  Surface.SurfaceShape.Flat /* shape */
);
