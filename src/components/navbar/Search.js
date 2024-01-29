import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
  const { search } = useSelector((state) => state.filters);
  const [text, setText] = useState(search);
  const dispatch = useDispatch();

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(text));

    if (!match) {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        value={text}
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
