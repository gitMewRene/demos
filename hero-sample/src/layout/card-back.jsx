import React from 'react';
import PropTypes from 'prop-types';

const CardBack = ({id, featured, image, title, tags, link, description}) => {
  
  //insstructions did not specify whether the cta was a link or button
  const cta = "Learn More >";
  return (
    <div className="card-back rounded-0 border border-dark">
        <img className="card-img-top rounded-0 img-reversed" src={image} alt="" />
      <div className="card-body p-2">
        <h3>{id}</h3>
        <div className="d-flex flex-wrap bg-default p-2" >
        {
          tags.map( o =>
            <span key={o} className="badge p-1 m-1 badge-dark">{o}</span>
          )
        }
        </div>
      </div>
        <a href={link} className="text-uppercase cta">{cta}</a>
    </div>
  );
}

CardBack.propTypes = {
  id:PropTypes.string,
  image:PropTypes.string,
  featured:PropTypes.number,
  title:PropTypes.string,
  description:PropTypes.string,
  tags:PropTypes.arrayOf(PropTypes.string),
  link:PropTypes.string,
}

CardBack.defaultProps = {
  id:'',
  image:'',
  featured:0,
  title:'',
  description:'',
  tags:[],
  link:''
}
export default CardBack;