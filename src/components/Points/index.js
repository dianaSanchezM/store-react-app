import React, { useContext, useState } from "react";
import "./points.css";
import { AppContext } from "../../contexts/UserContext";
import { pathsData, fetchData, add_points_options } from "../../const";

const Points = () => {
  const { user, setUser } = useContext(AppContext);
  const [selected, setSelected] = useState(add_points_options[0]);
  const [message, setMessage] = useState("Add points to your account now");

  const handlePost = () => {
    fetchData({ data: pathsData.points, body: { amount: selected } })
      .then((res) => {
        setUser({ ...user, points: res["New Points"] });
        setMessage(res.message);
      })
      .catch(setMessage("Oh something went wrong"));
  };

  return (
    <div className="points-comp">
      <div className="options">
        {add_points_options.map((element) => (
          <button
            key={element}
            className={
              selected === element ? "btn-active number" : "btn number"
            }
            onClick={() => setSelected(element)}
          >
            {element}
          </button>
        ))}
      </div>
      <button className="btn btn-add" onClick={() => handlePost()}>
        Add points
      </button>
      <h3>{message}!</h3>
    </div>
  );
};

export default Points;
