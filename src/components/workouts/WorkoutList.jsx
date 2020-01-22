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
        search={search}
        setSearch={setSearch}
      />
      <Workouts workoutName="New Workouts" search={debouncedSearch} />
    </WorkoutsStyleList>
  );
};

export default WorkoutList;
