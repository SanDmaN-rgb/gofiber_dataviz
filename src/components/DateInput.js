import React from 'react';

export const DateInput = ({onChange, date}) => {

    return(
            <div> 
              <input type="date" value={date} onChange={onChange}/>
            </div>
          )
  };