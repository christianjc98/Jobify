import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="btn-container">
        {pages.map((item) => {
          return (
            <button
              type="button"
              className={item === page ? "pageBtn active" : "pageBtn"}
              key={item}
              onClick={() => changePage(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        Next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
