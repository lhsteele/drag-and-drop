import React from 'react'

export default function Step(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('step_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  }

  const dragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  }


  return (
    <div className="step" id={props.id} draggable={props.draggable} onDragStart={dragStart} onDragOver={dragOver} style={{ backgroundColor: props.color }}>
      {props.step}
    </div>
  )
}
