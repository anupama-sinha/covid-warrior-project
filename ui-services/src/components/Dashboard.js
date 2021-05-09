import '../App.css';
import React, { useReducer, useState } from 'react';
import ResourceGrid from './ResourceGrid';

export default function Dashboard() {
  
  return (
    <div>
      <p>Please hover Cursor over Column Name & Search specific data and sort on Column as needed</p>
      <ResourceGrid/>
    </div>
  )
}