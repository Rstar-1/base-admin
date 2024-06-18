import React from 'react'

const AddSeo = () => {
  return (
    <div className="p20">
      <div className="">
        <label className="fsize14 textgray">Meta Title</label>
        <div className="mtpx8">
          <input
            className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
            placeholder="Enter Meta Title"
          />
        </div>
      </div>
      <div className="mtpx15">
        <label className="fsize14 textgray">Meta Author</label>
        <div className="mtpx8">
          <input
            className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
            placeholder="Enter Meta Author"
          />
        </div>
      </div>
      <div className="mtpx15">
        <label className="fsize14 textgray">Meta Keyword</label>
        <div className="mtpx8">
          <input
            className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
            placeholder="Enter Meta Author"
          />
        </div>
      </div>
      <div className="mtpx15">
        <label className="fsize14 textgray">Meta Description</label>
        <div className="mtpx8">
          <textarea
            className="side-input bgwhite textgray fsize14 rounded-5 plpx10 ptpx5 border-ec"
            placeholder="Enter Meta Author"
          ></textarea>
        </div>
      </div>
      <div className="mtpx15 flex justify-center">
        <button
          className="border-0 cursor-pointer w-full font-500 textwhite ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 rounded-5 bgprimary"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddSeo
