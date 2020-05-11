import React, {useState, useEffect} from 'react';

import Filter from "./component/filter/Filter";
import Card from "./component/card/Card";

import data from './data.json';

import './App.scss';


function App() {
  const [jobs, setJob] = useState(data);
  const [filter, setFilter] = useState([]);

  useEffect(() => setJob(data), []);

  // clear all
  const clearFilters = () => {
    setFilter([]);
  };

  // selected tag
  const handleClickTags = (tag) => {
    if (filter.includes(tag)) return;
    setFilter([...filter, tag]);
  }

  // delete tag filter
  const deleteTagFilter = (deleteTag) => {
    setFilter(filter.filter(s => s !== deleteTag));
  }

  // filter
  const filterJobs = ({role, level, languages, tools}) => {

    let tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }
  
    if (tools) {
      tags.push(...tools);
    }

    return filter.every(r => tags.includes(r));
  }

  const filtersJobs = jobs.filter(filterJobs);

  return (
    <div className="wrap">
      <header className="head"/>
      <main>
      
        {
          filter && filter.length > 0 ? 
            <Filter
              filterJob={filter} 
              clearFilters={clearFilters} 
              deleteTagFilter={deleteTagFilter} />
            : ''
        }

        <div className={" " + (filter && filter.length > 0 ? 'mini-top' : 'top')}>
          {
            filtersJobs.map((cards, i) => {
              return (
              <Card
                card={cards} 
                key={i} 
                handleClickTags={handleClickTags} />
              );
            })
          }
        </div>

      </main>
    </div>
  );
}

export default App;
