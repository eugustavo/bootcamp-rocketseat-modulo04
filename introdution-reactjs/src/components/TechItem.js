import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button
        type="button"
        onClick={onDelete}
      > Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Nenhuma Tech Informada',
}

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;