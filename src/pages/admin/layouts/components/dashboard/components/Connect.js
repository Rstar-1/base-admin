import React from "react";
import FeatherIcon from "feather-icons-react";
import ReactPaginate from "react-paginate";

const Connect = () => {
  return (
    <div>
      <div className="mtpx9 cust-scroll bgwhite rounded-10 sm-rounded-none">
        <div className="mbpx10 mtpx20">
          <div className="w-60 sm-w-90">
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
        </div>
        <div className="border-ec rounded-10 p16 sm-p8 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
          <div className="table-w">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Name</p>
                  </th>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Phone</p>
                  </th>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Email</p>
                  </th>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Description</p>
                  </th>
                  <th className="fsize13 textwhite w-20 font-300 table-collg">
                    <p>Created At</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>1</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>title</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metaauthor</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metakeyword</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metadescription</p>
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>1</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>title</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metaauthor</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metakeyword</p>
                  </td>
                  <td className="fsize13 textforth w-20 font-300 table-collg">
                    <p>metadescription</p>
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
    </div>
  );
};

export default Connect;
