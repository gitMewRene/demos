import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-text-truncate';
const CardFront = ({id, featured, image, title, tags, link, description}) => {

  return (
    <div className="card-front rounded-0 border border-dark">
    
    {
      (featured)?
    <div className="ribbon blue"><span>Featured</span></div>:
    null
    }
      <img className="card-img-top rounded-0" src={image} alt=""/>
      <div className="m-2">
        <div className="p-2"><b>{title}</b></div>
        <div className="text">
        <Truncate line={7} className="truncate h-100" text={description} truncateText="..."/>
        </div>
</div>
    </div>
  );
}

CardFront.propTypes = {
  id:PropTypes.string,
  image:PropTypes.string,
  featured:PropTypes.number,
  title:PropTypes.string,
  description:PropTypes.string,
  tags:PropTypes.arrayOf(PropTypes.string),
  link:PropTypes.string,
}

CardFront.defaultProps = {
  id:'',
  image:'',
  featured:0,
  title:'',
  description:'',
  tags:[],
  link:''
}
export default CardFront;