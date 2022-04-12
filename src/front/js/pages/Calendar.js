import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Calendar from "react-calendar";
import Scheduler, { Resource } from "devextreme-react/scheduler";

export const CalendarOverview = () => {
  const { store, actions } = useContext(Context);
  const currentDate = new Date();
  const views = ["week", "month"];

  return (
    <div className="container demo-container">
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={store.calendarEntries}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}
      >
        {/* Configuration goes here */}
      </Scheduler>
    </div>
  );
};

// export const CalendarOverview = (props) => {
//   const { store, actions } = useContext(Context);
//   const params = useParams();

//   const state = {
//     minDateValue: null,
//     maxDateValue: null,
//     disabledDates: null,
//     firstDay: 0,
//     currentValue: new Date(),
//     cellTemplate: null,
//     disabled: false,
//     zoomLevel: "month",
//   };
//   return (
//     <div>
//       <p className="text-center">
//         Plants I own: Watering and Fertilization Guide
//       </p>
//       return (
//       <div id="calendar-demo">
//         <div className="widget-container">
//           <Calendar
//             id="calendar-container"
//             value={currentValue}
//             onValueChanged={this.onCurrentValueChanged}
//             onOptionChanged={this.onZoomLevelChanged}
//             min={minDateValue}
//             max={maxDateValue}
//             disabledDates={disabledDates}
//             firstDayOfWeek={firstDay}
//             disabled={disabled}
//             zoomLevel={zoomLevel}
//             cellRender={cellTemplate}
//           />
//         </div>
//         <div className="options">
//           <div className="caption">Options</div>
//           <div className="option">
//             <CheckBox
//               defaultValue={false}
//               text="Specified min value"
//               onValueChanged={this.setMinDate}
//             />
//           </div>
//           <div className="option">
//             <CheckBox
//               defaultValue={false}
//               text="Specified max value"
//               onValueChanged={this.setMaxDate}
//             />
//           </div>
//           <div className="option">
//             <CheckBox
//               defaultValue={false}
//               text="Disable weekend"
//               onValueChanged={this.disableWeekend}
//             />
//           </div>
//           <div className="option">
//             <CheckBox
//               defaultValue={false}
//               text="Monday as the first day of a week"
//               onValueChanged={this.setFirstDay}
//             />
//           </div>
//           <div className="option">
//             <CheckBox
//               defaultValue={false}
//               text="Use the Custom Cell Template"
//               onValueChanged={this.useCellTemplate}
//             />
//           </div>
//           <div className="option">
//             <CheckBox
//               value={disabled}
//               text="Disabled"
//               onValueChanged={this.onDisabledChanged}
//             />
//           </div>
//           <div className="option">
//             <span>Zoom level</span>
//             <SelectBox
//               id="zoom-level"
//               dataSource={zoomLevels}
//               value={zoomLevel}
//               onValueChanged={this.onZoomLevelValueChanged}
//             />
//           </div>
//           <div className="option">
//             <span>Selected date</span>
//             <DateBox
//               id="selected-date"
//               value={currentValue}
//               width="100%"
//               onValueChanged={this.onCurrentValueChanged}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Calendar.propTypes = {
//   match: PropTypes.object,
// };
