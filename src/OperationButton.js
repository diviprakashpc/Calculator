import React from "react";
import { ACTIONS } from "./App";
export default function OperationButton({operation, dispatch, id}) {
  return (
    
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operation },
          })
        }
        id={id}
      >
        {operation}
      </button>
    
  );
}
