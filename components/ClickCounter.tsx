"use client";
import {useState} from "react";
export default function ClickCounter(){const [count,setCount]=useState(0);return <div className="panel"><h2>Client Component example</h2><p>Interactive state is managed in the browser. Click count: {count}</p><button className="btn" onClick={()=>setCount(v=>v+1)}>Increment</button></div>}
