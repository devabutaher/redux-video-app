import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();

  const { tags: selectedTags } = useSelector((state) => state.filters);

  const isSelected = selectedTags.includes(title) ? true : false;

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div
      onClick={handleSelect}
      className={`text-blue-600 px-4 py-1 rounded-full cursor-pointer select-none ${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100"
      }`}
    >
      {title}
    </div>
  );
}
