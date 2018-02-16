// import React from 'react';
// import {render} from 'react-dom';
// import InfiniteCalendar from '../../src';
// import '../../styles.css';
// import './demo.css';
//
// render(
//   <InfiniteCalendar
//     width={Math.min(window.innerWidth, 400)}
//   />
// , document.querySelector('#demo'));

import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  disableMultipleDateSelection,
  withMultipleDates,
} from '../../src';
import '../../styles.css';

const MultipleDatesCalendar = withMultipleDates(Calendar);

render(
    <InfiniteCalendar
        Component={MultipleDatesCalendar}
        /*
         * The `interpolateSelection` prop allows us to map the resulting state when a user selects a date.
         * By default, it adds the date to the selected dates array if it isn't already selected.
         * If the date is already selected, it removes it.
         *
         * You could re-implement this if this isn't the behavior you want.
         */
        //interpolateSelection={defaultMultipleDateInterpolation}
        interpolateSelection={disableMultipleDateSelection}
        selected={[new Date(2017, 1, 10), new Date(2017, 1, 18), new Date()]}
        onSelect={(date) => console.log(date)}
    />
    , document.querySelector('#demo')
);
