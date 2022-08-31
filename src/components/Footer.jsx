import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { setPagination } from "../redux/actions/pagination";
import { Container } from "./";
import { SwitchFirst, SwitchPrev, SwitchNext, SwitchLast } from "./SwitchButtons";

const Footer = ({ activePage, totalImages, perPage }) => {
  const dispatch = useDispatch();
  const buttonCount = Math.ceil(totalImages / perPage);

  const onClickFirst = () => {
    dispatch(setPagination(0));
  };

  const onClickPrev = () => {
    dispatch(setPagination(activePage - 1));
  };

  const onClickNext = () => {
    dispatch(setPagination(activePage + 1));
  };

  const onClickLast = () => {
    dispatch(setPagination(buttonCount - 1));
  };

  return (
    <footer className="footer">
      <Container>
        {buttonCount > 1 && (
          <div className="footer pagination">
            <SwitchFirst onClickFirst={onClickFirst} disabled={activePage === 0} />
            <SwitchPrev onClickPrev={onClickPrev} disabled={activePage === 0} />
            <div className="pagination__list">
              {Array(buttonCount)
                .fill()
                .map((item, index) => (
                  <a
                    key={index}
                    onClick={() => dispatch(setPagination(index))}
                    className={classNames("pagination__link", {
                      "pagination__link--active": index === activePage,
                    })}
                    href="#!">
                    {index + 1}
                  </a>
                ))}
            </div>
            <SwitchNext disabled={activePage + 1 === buttonCount} onClickNext={onClickNext} />
            <SwitchLast disabled={activePage + 1 === buttonCount} onClickLast={onClickLast} />
          </div>
        )}
      </Container>
    </footer>
  );
};

export default Footer;
