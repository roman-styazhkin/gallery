import React from "react";
import { setAuthor, setLocation } from "../redux/actions/filters";
import Api from "../services/Api";
import { Container, Select, SelectOptions, RangeDropdown } from "./";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";
import { setPagination } from "../redux/actions/pagination";

const Filter = () => {
  const dispatch = useDispatch();
  const { created_lte, created_gte } = useSelector(({ filters }) => filters);
  const [authors, setAuthors] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const { getAuthors, getLocations } = new Api();

  const selectItem = (category, currentId) => {
    const action = {
      Author: () => dispatch(setAuthor(currentId)),
      Location: () => dispatch(setLocation(currentId)),
    };

    dispatch(setPagination(0));

    return action[category]();
  };

  React.useEffect(() => {
    getAuthors().then(setAuthors);
    getLocations().then(setLocations);
  }, []);

  return (
    <section className="filter">
      <Container>
        <div className="filter__panel">
          <SearchInput />

          <Select category="Author" selectItem={selectItem}>
            <SelectOptions items={authors} keyName="name" />
          </Select>

          <Select category="Location" selectItem={selectItem}>
            <SelectOptions items={locations} keyName="location" />
          </Select>

          <Select category="Created">
            <RangeDropdown min={created_gte} max={created_lte} />
          </Select>
        </div>
      </Container>
    </section>
  );
};

export default Filter;
