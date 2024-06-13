import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

const Seo1 = () => {
  return (
    <div>
      <div className="mtpx9 cust-scroll p20 sm-p15 bgwhite rounded-10 sm-rounded-none">
        <h4 className="fsize22 md-fsize20 sm-fsize18 textprimary mtpx1 mbpx1">
          SEO
        </h4>
        <div className="my10 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mtpx9 mrpx2">
                <FeatherIcon
                  icon="search"
                  className="textgray cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
          <div className="w-40 flex justify-end">
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 bgprimary">
              Add
            </button>
          </div>
        </div>
        <div className="border-ec rounded-10 p16 sm-p8 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
          <div className="table-w">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite w-10 table-colsm font-300">
                    <p>Id</p>
                  </th>
                  <th className="fsize13 textwhite w-10 font-300 table-collg">
                    <p>Meta Title</p>
                  </th>
                  <th className="fsize13 textwhite w-10 font-300 table-collg">
                    <p>Meta Author</p>
                  </th>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Meta Keyword</p>
                  </th>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Meta Description</p>
                  </th>
                  <th className="fsize13 textwhite w-10 font-300 table-collg">
                    <p>Created At</p>
                  </th>
                  <th className="fsize13 textwhite w-10 font-300 table-collg">
                    <p>Status</p>
                  </th>
                  <th className="fsize13 textwhite w-10 font-300 table-colsm">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fsize13 textforth w-10 table-colsm font-300">
                    <p>1</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>title</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>metaauthor</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metakeyword</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metadescription</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>Publish</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>Publish</p>
                  </td>
                  <td className="fsize13 w-10 textforth table-colsm">
                    <NavLink>
                      <FeatherIcon
                        icon="edit"
                        className="textsecondary mx3 cursor-pointer"
                        size={16}
                      />
                    </NavLink>
                    <FeatherIcon
                      icon="trash"
                      className="textdanger cursor-pointer"
                      size={16}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth w-10 table-colsm font-300">
                    <p>1</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>title</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>metaauthor</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metakeyword</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metadescription</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>Publish</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <p>Publish</p>
                  </td>
                  <td className="fsize13 w-10 textforth table-colsm">
                    <NavLink>
                      <FeatherIcon
                        icon="edit"
                        className="textsecondary mx3 cursor-pointer"
                        size={16}
                      />
                    </NavLink>
                    <FeatherIcon
                      icon="trash"
                      className="textdanger cursor-pointer"
                      size={16}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seo1
