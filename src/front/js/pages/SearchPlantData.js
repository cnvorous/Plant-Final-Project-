import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlantCard } from "../component/PlantCard";
import queryString from "query-string";

export const SearchPlantData = (props) => {
  const { store, actions } = useContext(Context); //access items on flux page
  const params = useParams();
  const [input, setInput] = useState("");
  const [plantArray, setPlantArray] = useState(store.plantLibrary);

  const [filterList, setFilterList] = useState([
    {
      id: 105,
      name: "Small Plant",
      value: "small",
    },
    {
      id: 106,
      name: "Water Requirments: Low",
      value: "low level",
    },
    {
      id: 107,
      name: "Light Exposure: Direct Light",
      value: "direct",
    },
    {
      id: 108,
      name: "Blooming Plant",
      value: "yes",
    },
    {
      id: 109,
      name: "Medium Plant",
      value: "medium",
    },
    {
      id: 110,
      name: "Water Requirments: Moderate",
      value: "moderate level ",
    },
    {
      id: 111,
      name: "Light Exposure: Indirect Light",
      value: "indirect",
    },
    {
      id: 112,
      name: "Non-Blooming Plant",
      value: "no",
    },

    {
      id: 113,
      name: "Large Plant",
      value: "large",
    },
    {
      id: 114,
      name: "Water Requirments: High",
      value: "high level",
    },

  ]);

  const [activeFilter, setActiveFilter] = useState([]);
  const [filteredList, setFilteredList] = useState(store.plantLibrary);

  const onFilterChange = (term) => {
    // if (term === "ALL") {
    // 	if (activeFilter.length === filterList.length) {
    // 		setActiveFilter([]);
    // 	} else {
    // 		setActiveFilter(filterList.map(filter => filter.value));
    // 	}
    // } else {
    if (activeFilter.includes(term)) {
      const filterIndex = activeFilter.indexOf(term);
      const newFilter = [...activeFilter];
      newFilter.splice(filterIndex, 1);
      setActiveFilter(newFilter);
    } else {
      setActiveFilter([...activeFilter, term]);
    }
    // }
  };

  useEffect(() => {
    if (activeFilter.length === 0) {
      setFilteredList(plantArray);
    }
    // if (activeFilter.length === filterList.length) {
    // 	setFilteredList(plantArray);
    // }
    else {
      setFilteredList(
        plantArray.filter((item) => {
          return (
            activeFilter.includes(item.size) ||
            activeFilter.includes(item.height) ||
            activeFilter.includes(item.blooms) ||
            activeFilter.includes(item.water_req) ||
            activeFilter.includes(item.tall) ||
            activeFilter.includes(item.light_exposure)
          );
        })
      );
    }
  }, [activeFilter]);

  useEffect(() => {
    const qs = queryString.parse(location.hash);
    searchFunction(qs.keyword);
  }, [store.plantLibrary]);

  const searchFunction = (keyword) => {
    let filteredArray = filteredList.filter((item) => {
      if (keyword == "" || keyword == undefined) {
        return item;
      } else if (
        item.common_name.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return item;
      }
    });
    setFilteredList(filteredArray);
  };

  const searchHash = (event) => {
    searchFunction(event);
    if (event == "") {
      setInput("");
      setFilteredList(store.plantLibrary);
    }
    location.hash = `keyword=${event}`;
  };

  return (
    <div className="plant-search-container">
      <div className="input-group mb-3 w-50 p-3 mx-auto">
        <span
          className="search-button input-group-text"
          id="inputGroup-sizing-default"
        >
          Plant Search
        </span>
        <input
          type="search"
          id="search"
          value={input}
          placeholder="Search by name..."
          className="form-control data-search"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setInput(e.target.value);
            //searchHash(input)
          }}
          onKeyUp={() => {
            searchHash(input);
          }}
        />
        <button className="clear-btn" onClick={() => searchHash("")}>
          Clear Results
        </button>
      </div>
      <p className="text-success text-center mb-2">Filtering Options:</p>{" "}
      <form
        className="rounded d-flex flex-row flex-wrap">
        {filterList.map((filter) => (
          <div
            className="form-check filter-box d-flex flex-row flex-wrap"
            key={filter.id}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={filter.id}
              value={filter.value}
              onChange={(e) => {
                onFilterChange(filter.value);
                setInput("");
              }}
              checked={activeFilter.includes(filter.value)}
            />
            <label className="form-check-label mr-3" htmlFor={filter.id}>
              {filter.name}
            </label>
          </div>
        ))}
      </form>
      {" "}
      <div className="m-5 p-4 bg-opacity-10 plant-div d-sm-flex flex-wrap justify-content-sm-evenly">
        {filteredList.map((plant, index) => {
          return <PlantCard plants={plant} key={index} />;
        })}
      </div>
    </div>
  );
};

SearchPlantData.propTypes = {
  match: PropTypes.object,
};
