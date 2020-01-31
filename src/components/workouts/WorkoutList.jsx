import React, { useState } from "react";
import Workouts from "./Workouts";
import { WorkoutsStyleList } from "./WorkoutStyle";

import Search from "../common/Search";
import { useDebounce } from "./../../utils/index";

const WorkoutList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 700);
  return (
    <WorkoutsStyleList>
      <Search
        placeholder="Look for a specific workout"
        setSearch={setSearch}
        search={search}
        id="search-workout"
      />
      <Workouts workoutName="Custom Workouts" workoutQuery="CUSTOM_WORKOUTS" />
      <Workouts
        workoutName={search ? `Search results for "${search}"` : `New Workouts`}
        search={debouncedSearch}
      />
    </WorkoutsStyleList>
  );
};

export default WorkoutList;
