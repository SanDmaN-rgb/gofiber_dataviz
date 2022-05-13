import React from 'react';

export const DateInput = ({onChange, date}) => {

    return(
            <div className="text-center"> 
              <input type="date" value={date} onChange={onChange} className="
                                      bg-[#91D8C7]
                                      px-[15px] py-[10px]
                                      rounded
                                      border-transparent
                                      hover:bg-[#0F8C79] hover:text-white hover:cursor-pointer
                                      duration-200
                                      mt-4
                                      sm:ml-[15%]
                                      xs:ml-[50%]
                                      xxs:ml-[80%]
                                      "/>
            </div>
          )
  };