import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-text-truncate';
const CardFront = ({featured, image, title, tags, link, description}) => {

  return (
    <div className="card-front position-absolute card h-100 rounded-0 border border-dark">
    {
      (featured)?
    <div className="ribbon blue"><span>Featured</span></div>:
    null
    }
      <img className="card-img-top rounded-0" src={image} alt=""/>
      <div className="card-body text p-1">
        <b>{title}</b>
        <Truncate line={8} className="truncate" text={description} truncateText="..."/>
      </div>
    </div>
  );
}

CardFront.propTypes = {
  image:PropTypes.string,
  featured:PropTypes.number,
  title:PropTypes.string,
  description:PropTypes.string,
  tags:PropTypes.arrayOf(PropTypes.string),
  link:PropTypes.string,
}

CardFront.defaultProps = {
  image:'',
  featured:0,
  title:'',
  description:'',
  tags:[],
  link:''
}
export default CardFront;