import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import AddSeo from "./add/AddSeo";
import EditSeo from "./edit/EditSeo";

const SeoTable = () => {
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  return (
    <div className="drawer">
      <div
        className={
          addshow === true
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite w-30 md-w-40 sm-w-90 h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Add Seo
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setaddshow(false)}
              />
            </div>
          </div>
          <AddSeo />
        </div>
      </div>
      <div
        className={
          editshow === true
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite w-30 md-w-40 sm-w-90 h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Edit Seo
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => seteditshow(false)}
              />
            </div>
          </div>
          <EditSeo />
        </div>
      </div>
      <div className="mtpx9 cust-scroll p20 sm-p15 bgcard rounded-10 sm-rounded-none">
        <h4 className="fsize22 md-fsize20 sm-fsize18 textprimary mtpx1 mbpx1">
          SEO
        </h4>
        <div className="my10 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
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
            <button
              onClick={() => setaddshow(true)}
              className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 bgprimary"
            >
              Add
            </button>
          </div>
        </div>
        <div className="border-ec sm-border-none rounded-10 p16 sm-p1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
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
                    <p>12/12/2002</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    <button className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py4 bg-light-success">
                      Publish
                    </button>
                    {/* <button className="border-0 cursor-pointer font-400 textdanger rounded-20 fsize12 px12 py4 bg-light-danger">
                      Unpublish
                    </button> */}
                  </td>
                  <td className="fsize13 w-10 textforth table-colsm">
                    <FeatherIcon
                      onClick={() => seteditshow(true)}
                      icon="edit"
                      className="textsecondary mx3 cursor-pointer"
                      size={16}
                    />
                    <FeatherIcon
                      icon="trash-2"
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
                    <p>12/12/2002</p>
                  </td>
                  <td className="fsize13 textforth w-10 font-300 table-collg">
                    {/* <button className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py4 bg-light-success">
                      Publish
                    </button> */}
                    <button className="border-0 cursor-pointer font-400 textdanger rounded-20 fsize12 px12 py4 bg-light-danger">
                      Unpublish
                    </button>
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
                      icon="trash-2"
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
};

export default SeoTable;
