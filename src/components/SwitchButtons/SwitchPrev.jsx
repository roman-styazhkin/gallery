const SwitchPrev = ({ disabled, onClickPrev }) => {
  return (
    <button
      onClick={onClickPrev}
      className="pagination__button pagination__button--prev"
      disabled={disabled}>
      <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.06716 7.13428L2.26841 12.6433C1.89954 12.9939 1.30148 12.9939 0.932791 12.6433C0.56407 12.293 0.56407 11.7248 0.932791 11.3745L6.06379 6.49991L0.93294 1.62545C0.564219 1.275 0.564219 0.706895 0.93294 0.356587C1.30166 0.00613754 1.89969 0.00613754 2.26856 0.356587L8.06731 5.86567C8.25167 6.04091 8.34375 6.27034 8.34375 6.49988C8.34375 6.72953 8.25149 6.95913 8.06716 7.13428Z"
          fill="var(--text-color)"
        />
      </svg>
    </button>
  );
};

export default SwitchPrev;
