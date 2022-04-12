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
      name: "Medium Plant",
      value: "medium",
    },
    {
      id: 107,
      name: "Large Plant",
      value: "large",
    },
    {
      id: 108,
      name: "Blooming Plant",
      value: "yes",
    },
    {
      id: 109,
      name: "Non-Blooming Plant",
      value: "no",
    },
    {
      id: 110,
      name: "Light Exposure: Direct Light",
      value: "direct",
    },
    {
      id: 111,
      name: "Light Exposure: Indirect Light",
      value: "indirect",
    },
    {
      id: 112,
      name: "Water Requirments: Moderate",
      value: "moderate level ",
    },
    {
      id: 113,
      name: "Water Requirments: Low",
      value: "low level",
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
        {/*NEED: seems like mt cant go higher then mt-5 */}
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
          placeholder="Type in plant name OR click enter to search..."
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
      <p className="text-success text-center mb-4">Filtering Options</p>{" "}
      {/* NEED: using h4 isnt working  */}
      <div className="plant-checkbox-container">
        {/* <div className="row row-cols-6">
					<div className="col"></div>{/*empty space on purpose*
					<div className="col d-flex flex-column">
						{/* <label className="filter-options">Size of Plant Base:</label> 
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Small</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Medium</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Large</label>
					</div>
					<div className="col d-flex flex-column">
						<label className="filter-options">Water Dependency:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Low (montly)</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Moderate (weekly)</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />High(every few days)</label>
					</div>
					<div className="col d-flex flex-column">
						<label className="filter-options">Sun Exposure:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Indirect Light</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Direct Light</label>
					</div>
					<div className="col d-flex flex-column">
						<label className="filter-options">Growth Season:</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Spring/Summer</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Fall/Winter</label>
					</div>
					<div className="col"></div> {/*empty space on purpose*
					<div className="col"></div>{/*empty space on purpose*
					<div className="col d-flex flex-column mt-3"> {/*-opacity-25 *
						<label className="filter-options">Blooming</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Yes</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />No</label>
					</div>
					<div className="col d-flex flex-column mt-3">
						<label className="filter-options">Fertilization Dependency</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Weekly</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Monthly</label>
					</div>
					<div className="col d-flex flex-column mt-3">
						<label className="filter-options">Plant Height</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Small</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Medium</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Large</label>
					</div>
					<div className="col d-flex flex-column mt-3">
						<label className="filter-options">Toxicity</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Harmful to Children</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Harmful to Pets</label>
						<label><input className="checkbox1" type='checkbox' onclick='handleClick(this);' />Safe for Humans & Pets</label>
					</div>
					<div className="col"></div>{/*empty space on purpose*
				</div> */}
        <form
          className="w-50 rounded search-box p-5 "
          style={{
            background: "linear-gradient(to bottom, #f9f3c8, rgba(255,0,0,0))",
            height: "fit-content",
          }}
        >
          {/* <div className="form-check d-block form-check-inline">
						<input
							className="form-check-input"
							type="checkbox"
							id="all"
							value="all"
							onClick={() => onFilterChange("ALL")}
							checked={activeFilter.length === filterList.length}
						/>
						{/* <label className="form-check-label" htmlFor="all">
							ALL
						</label> *
					</div> */}
          {filterList.map((filter) => (
            <div
              className="form-check d-block form-check-inline"
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
      </div>
      <div className="plant-results-body bg-primary bg-opacity-10 m-5 p-5">
        {" "}
        {/*Question why does margin in bootstrap not pass 5 */}
        {/* <template className="plant-card-template"> */}
        <div className="plant-div d-sm-flex flex-wrap justify-content-sm-evenly">
          {filteredList.map((plant, index) => {
            return <PlantCard plants={plant} key={index} />;
          })}
        </div>
        {/* </template> */}
      </div>
      <div className="tempdiv">
        <Link to="/singleplantview">
          Temp Link to take to Single Plant View
        </Link>
      </div>
    </div>
  );
};

SearchPlantData.propTypes = {
  match: PropTypes.object,
};
