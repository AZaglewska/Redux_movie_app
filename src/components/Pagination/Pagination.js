import React from "react";
import { connect } from "react-redux";
import {
  increasePageNumberAction,
  decreasePageNumberAction,
} from "../../actions/pagesActions";

const Pagination = ({
  pageNumber,
  increasePageNumberFn,
  decreasePageNumberFn,
}) => {
  return (
    <div>
      <button
        disabled={pageNumber === 1 ? true : false}
        onClick={() => decreasePageNumberFn()}
      >
        Go back
      </button>
      <p>{pageNumber}</p>
      <button onClick={() => increasePageNumberFn()}>Go next</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageNumber: state.pagesReducer.pageNumber,
});

const mapDispatchToProps = (dispatch) => ({
  increasePageNumberFn: () => dispatch(increasePageNumberAction()),
  decreasePageNumberFn: () => dispatch(decreasePageNumberAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
