import React from 'react'

export default function Completion(props) {
  const drop = (level) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      const step_id = e.dataTransfer.getData('step_id');
      const step = document.getElementById(step_id);
      if (step_id) {
        step.style.display = 'block';
      } else {
        console.log('returning')
        return
      }
      

      e.target.appendChild(step)
      props.handleLevelUpdate(step_id, level);
    } 
  }

  const dragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className="completion-level" id={props.id} onDrop={drop(props.id)} onDragOver={dragOver}>
      <div className="level-header" draggable={false}>
        {props.level}
      </div>
      <div className="level-container">{props.children}</div>
    </div>
  )
}
