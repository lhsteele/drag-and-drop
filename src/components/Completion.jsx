import React from 'react'

export default function Completion(props) {
  const drop = (level) => {
    return (e) => {
      e.preventDefault();
      const step_id = e.dataTransfer.getData('step_id');

      const step = document.getElementById(step_id);
      step.style.display = 'block';

      e.target.appendChild(step)
      props.handleLevelUpdate(step_id, level);
    } 
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div className="completion-level" id={props.id} onDrop={drop(props.id)} onDragOver={dragOver}>
      <div className="level-header">
        {props.level}
      </div>
      <div className="level-container">{props.children}</div>
    </div>
  )
}
