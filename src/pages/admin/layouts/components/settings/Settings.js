import React, { useState } from "react";

const Settings = () => {
  const [check, setCheck] = useState(1);
  const settingtab = [
    {
      id: 1,
      name: "Sidebar",
    },
    {
      id: 2,
      name: "Dashboard",
    },
  ];
  return (
    <div className="mtpx9 cust-scroll p20 sm-p15 bgcard rounded-10 sm-rounded-none">
      <div className="w-full bordb flex items-center">
        {settingtab.map((e) => (
          <p
            onClick={() => setCheck(e.id)}
            className={
              check === e.id
                ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                : "fsize14 textgray cursor-pointer px16 pbpx6"
            }
          >
            {e.name}
          </p>
        ))}
      </div>
      <div className="mtpx10">
        {check === 1 ? <>gfd</> : null}
        {check === 2 ? <>gf</> : null}
      </div>
    </div>
  );
};

export default Settings;
