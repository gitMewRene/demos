import React from 'react';
import PropTypes from 'prop-types';

const CardBack = ({featured, image, title, tags, link, description}) => {
  const style = (featured)? "ribbon-feature" : "";
  //insstructions did not specify whether the cta was a link or button
  const cta = "Learn More >";
  return (
    <div className="card h-100 rounded-0 border border-dark">
      <div className={`card-header ${style}`}/>
        <img className="card-img-top rounded-0 img-reversed" src={image} alt="" />
      <div className="card-body p-1">
        <title>{title}</title>
        <div className="d-flex flex-wrap bg-default" >
        {
          tags.map( o =>
            <span key={o} className="badge badge-dark">{o}</span>
          )
        }
        </div>
        <a href={link} className="text-uppercase float-right">{cta}</a>
      </div>
    </div>
  );
}

CardBack.propTypes = {
  image:PropTypes.string,
  featured:PropTypes.number,
  title:PropTypes.string,
  description:PropTypes.string,
  tags:PropTypes.arrayOf(PropTypes.string),
  link:PropTypes.string,
}

CardBack.defaultProps = {
  image:'',
  featured:0,
  title:'',
  description:'',
  tags:[],
  link:''
}
export default CardBack;