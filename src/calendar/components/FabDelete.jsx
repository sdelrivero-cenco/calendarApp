import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

const FabDelete = () => {
  const {} = useCalendarStore();

  const handleClickNew = () => {};
  return (
    <button className="btn btn-primary fab-danger" onClick={handleClickNew}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default FabDelete;
