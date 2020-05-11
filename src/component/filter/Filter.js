import React from 'react';
import './Filter.scss';

function Filter(props) {
    return (
        <div className="card-filter">
            <div className="card-filter__box">
                <div className="card-filter__tags tags">
                    {
                    props.filterJob.map((filter, index) => 
                        <span className="tag" key={index}>
                            <span className="title">{filter}</span>
                            <span
                                onClick={() => props.deleteTagFilter(filter)}
                                className="closed" />
                        </span>)
                    }
                </div>
                <div onClick={() => props.clearFilters()} className="clear">Clear</div>
            </div>
        </div>
    );
}

export default Filter;