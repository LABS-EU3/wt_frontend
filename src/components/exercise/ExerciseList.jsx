import React, { useState } from "react";
import Exercises from "./Exercises";
import { ExercisesStyle, ExerciseListStyle } from "./ExerciseStyle";
import Search from "../common/Search";
import { useDebounce } from "./../../utils/index";

const ExerciseList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 700);

  return (
    <ExerciseListStyle>
      <ExercisesStyle>
        <Search
          placeholder="Look for a specific exercise"
          search={search}
          id="search-exercise"
          setSearch={setSearch}
        />
        {search.length > 0 ? (
          <Exercises
            exerciseName={`Search results for "${search}"`}
            search={debouncedSearch}
          />
        ) : (
          <>
            <Exercises
              exerciseQuery="RECOMENDED_EXERCISES"
              exerciseName="Recommended Exercises"
            />
            <Exercises
              exerciseQuery="TOP_RATED_EXERCISES"
              exerciseName="Top Rated Exercises"
            />
          </>
        )}
      </ExercisesStyle>
    </ExerciseListStyle>
  );
};

export default ExerciseList;
