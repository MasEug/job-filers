import React from 'react';
import './Card.scss';

function Card(props) {

  let tags = [props.card.role, props.card.level];
  const divStyle = {
    backgroundImage: 'url(' + props.card.logo + ')'
  };

  let tagNew;
  if (props.card.new === true) {
    tagNew = <span className="badge green">New!</span>;
  }

  let tagFeatured;
  if (props.card.featured === true) {
    tagFeatured =  <span className="badge black">Featured</span>;
  }

  if (props.card.languages) {
    tags.push(...props.card.languages);
  }

  if (props.card.tools) {
    tags.push(...props.card.tools);
  }

  return (
    <div className="card">
      <div className="card__box">

        <div className="left-column">
          <div className="card__box__img" style={divStyle}/>

          <div className="card__box__info">
            <div className="">
              <span className="title">{props.card.company}</span>
              {tagNew}
              {tagFeatured}
            </div>

            <div className="role">
              {props.card.position}
            </div>

            <div className="skills">
              <span className="">
                {props.card.postedAt}
              </span>
              <span className="point">
                          •
              </span>
              <span className="">
                  {props.card.contract}
              </span>
              <span className="point">
                  •
              </span>
              <span className="">
                  {props.card.location}
              </span>
            </div>
          </div>
        </div>

        <span className="card__box__tags tags">
            {tags.map((tag, index) => (
              <span onClick={() => props.handleClickTags(tag)} key={index} className="tag">{tag}</span>
            ))}
          </span>
      </div>
    </div>
  );
}

export default Card;