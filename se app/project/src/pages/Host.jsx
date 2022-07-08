import React from 'react'
import './host.css'

const Host = () => {
        function newElement() {
        let li = document.createElement("li");
        let inputValue = document.getElementById("myInput").value;
        let inputValue2 = document.getElementById("myDate").value;
        let inputValue3 = document.getElementById("myTime").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
      
        let u = document.createTextNode(inputValue2);
        li.appendChild(u);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myDate").value = "";
      
        let v = document.createTextNode(inputValue3);
        li.appendChild(v);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myTime").value = "";
      }
  return (
    <>
    <div id="myDIV" className="header">
            <h2 >Host Events</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <input type="text" id="myInput" placeholder="Title..."/>
                    </div>            
                    <div className="col-lg-3">
                        <input type="text" id="myDate" placeholder="Date..."/>
                    </div>
                    <div className="col-lg-3">
                        <input type="text" id="myTime" placeholder="Time..."/>
                    </div>
                    <span  className="addBtn">Add</span>
                </div>
            </div>
        </div>
        

        <ul id="myUL">
            <div className="container">
                <div className="row">
                    <div className="Events col-lg-4">
                        <li><h2>Hit the gym</h2></li>
                        <li><h3>10 June 7:30 PM</h3></li>
                    </div>
                    <div className="Events col-lg-4">
                        <li><h2>Pay bills</h2></li>
                        <li><h3>10 June 7:30 PM</h3></li>
                    </div>
                    <div className="Events col-lg-4">
                        <li><h2>Buy eggs</h2></li>
                        <li><h3>10 June 7:30 PM</h3></li>
                    </div>
                    <div className="Events col-lg-4">
                        <li><h2>Organize office</h2></li>
                        <li><h3>10 June 7:30 PM</h3></li>
                    </div>
               </div>
            </div>
            </ul> 
        </>
  )
}

export default Host