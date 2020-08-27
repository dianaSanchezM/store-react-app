import React, { useContext, useState, useEffect, useRef } from "react";
import "./points.css";
import coin from "../../images/coin.svg";
import { AppContext } from "../../contexts/UserContext";
import { pathsData, fetchData, add_points_options } from "../../const";

const Points = () => {
  const { user, setUser } = useContext(AppContext);
  const [selected, setSelected] = useState(add_points_options[0]);
  const [message, setMessage] = useState("Add points to your account now");
  let isMounted = useRef(true);

  const handlePost = (e) => {
    e.preventDefault();
    fetchData({ data: pathsData.points, body: { amount: selected } })
      .then((res) => {
         setUser({ ...user, points: res["New Points"] });
         isMounted.current && setMessage(res.message);
      
      })
  };

  useEffect(()=> {
    return() => {
      isMounted.current = false;
    }
  },[]);

  return (
    <div className="points-comp">
      <h1>Add points</h1>
      <div className="options">
        {add_points_options.map((element) => (
          <button
            key={element}
            className={
              selected === element ? "btn-active number" : "btn number"
            }
            onClick={() => setSelected(element)}
          >
            <img src={coin} alt="coin" />
          <p>{element}</p>
          </button>
        ))}
      </div>
      <button className="btn btn-add btn-add-points" onClick={(e) => handlePost(e)}>
        Go!
      </button>
      <h3>{message}!</h3>
    </div>
  );
};

export default Points;
