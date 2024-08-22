import LightGallery from 'lightgallery/react';
import { useLocation } from 'react-router-dom';
import './Event.scss'
import IconBreadcrumbs from '../../components/BreadCrumbs/BreadCrumbs';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { colors } from '@mui/material';
//lazyload

function Event() {
const location=useLocation();
const getTransformedImageUrl = (url) => {
    return url.replace("/upload/", "/upload/w_600,q_50/");
  };
const { images,eventName } = location.state;
const imageUrls = images.map(x => ({
    original: x.secure_url,
    thumbnail: getTransformedImageUrl(x.secure_url),
  }));
// console.log(imageUrls);
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    
    return (
        <div className="Event-page">
           soon
        </div>
    );
}
export default Event;
