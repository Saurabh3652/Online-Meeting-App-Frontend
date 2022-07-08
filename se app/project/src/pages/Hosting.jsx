import React from 'react'
import './hosting.css'
const Hosting = () => {
    
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var inputValue2 = document.getElementById("myDate").value;
	var inputValue3 = document.getElementById("myTime").value;

  
  const list = document.getElementById("ed");
  
  list.innerHTML += `<div class="Events col-lg-4">
  <li><h2>${inputValue}</h2></li>
  <li><h3>${inputValue2} ${inputValue3}</h3></li>
  </div>`;
  
  document.getElementById("myInput").value = "";
  document.getElementById("myDate").value = "";
  document.getElementById("myTime").value = "";
  
  
  console.log(list)
  
  }
  return (
    <>
    <div id="myDIV" class="header">
            <h2 style="margin:5px">Host Events</h2>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <input type="text" id="myInput" placeholder="Title..."/>
                    </div>            
                    <div class="col-lg-3">
                        <input type="text" id="myDate" placeholder="Date..."/>
                    </div>
                    <div class="col-lg-3">
                        <input type="text" id="myTime" placeholder="Time..."/>
                    </div>
                    <span onclick="newElement()" class="addBtn">Add</span>
                </div>
            </div>
        </div>
        

        <ul id="myUL">
            <div class="container">
                <div id="ed" class="row edittt">
                    <div class="Events col-lg-4">
                        <li><h2>Webinar on WEB 3.0</h2></li>
                        <li><h3>10 May 7:30 PM</h3></li>
                    </div>
                    <div class="Events col-lg-4">
                        <li><h2>Crypto-Creating The New World</h2></li>
                        <li><h3>15 May 5:30 PM</h3></li>
                    </div>
                    <div class="Events col-lg-4">
                        <li><h2>Blockchain and AI</h2></li>
                        <li><h3>18 May 4:30 PM</h3></li>
                    </div>
                    <div class="Events col-lg-4">
                        <li><h2>ETFs-The New Stock Market</h2></li>
                        <li><h3>25 May 6:30 PM</h3></li>
                    </div>
                    
               </div>
            </div>
        </ul>
    </>
  )
}

export default Hosting