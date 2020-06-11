import React from 'react'

export default function Completion(props) {
  const drop = e => {
    e.preventDefault();
    const step_id = e.dataTransfer.getData('step_id');

    const step = document.getElementById(step_id);
    step.style.display = 'block';

    e.target.appendChild(step)
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div className="completion-level" id={props.id} onDrop={drop} onDragOver={dragOver}>
      <div className="level-header">
        {props.level}
      </div>
      <div className="level-container">{props.children}</div>
    </div>
  )
}
