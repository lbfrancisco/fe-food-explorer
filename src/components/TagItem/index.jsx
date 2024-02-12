import React from "react";
import { Plus, X } from "lucide-react";
import { Container } from "./styles";

export default function TagItem({ value, isNew, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      >
      </input>

      {isNew ? (
        <button
          type="button"
          onClick={onClick}
        >
          <Plus size={16} color="#fff"/>
        </button>
      ) : (
        <button
          type="button"
          onClick={onClick}
        >
          <X size={16} color="#fff"/>
        </button>
      )}
    </Container>
  );
}
