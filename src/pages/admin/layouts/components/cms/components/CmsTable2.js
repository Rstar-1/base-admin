import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import AddCms2 from "./add/AddCms2";
import EditCms2 from "./edit/EditCms2";
import ReactPaginate from "react-paginate";

const CmsTable2 = () => {
  const [addshow2, setaddshow2] = useState(false);
  const [editshow2, seteditshow2] = useState(false);
  return (
    <div className="drawer">
      <div
        className={
          addshow2 === true
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
                onClick={() => setaddshow2(false)}
              />
            </div>
          </div>
          <AddCms2 />
        </div>
      </div>
      <div
        className={
          editshow2 === true
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
                onClick={() => seteditshow2(false)}
              />
            </div>
          </div>
          <EditCms2 />
        </div>
      </div>
      <div className="mbpx10 mtpx16 flex gap-12 items-center">
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
            onClick={() => setaddshow2(true)}
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
                <th className="fsize13 textwhite w-20 font-300 table-collg">
                  <p>SectionID</p>
                </th>
                <th className="fsize13 textwhite w-20 font-300 table-collg">
                  <p>Section Name</p>
                </th>
                <th className="fsize13 textwhite w-30 font-300 table-collg">
                  <p>CMS Data</p>
                </th>
                <th className="fsize13 textwhite w-20 font-300 table-collg">
                  <p>Created At</p>
                </th>
                <th className="fsize13 textwhite w-10 font-300 table-colsm">
                  <p>Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fsize13 textforth w-20 font-300 table-collg">
                  <p>title</p>
                </td>
                <td className="fsize13 textforth w-20 font-300 table-collg">
                  <p>metaauthor</p>
                </td>
                <td className="fsize13 textforth w-30 font-300 table-collg">
                  <img
                    src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
                    alt="cms-img"
                    className="cms-img object-contain"
                  />
                </td>
                <td className="fsize13 textforth w-20 font-300 table-collg">
                  <p>12/12/2023</p>
                </td>
                <td className="fsize13 w-10 textforth table-colsm">
                  <FeatherIcon
                    onClick={() => seteditshow2(true)}
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
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={4}
          pageRangeDisplayed={4}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default CmsTable2;
