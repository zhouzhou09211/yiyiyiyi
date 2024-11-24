// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
  const employeeItems = document.querySelectorAll(".employee-card");
 employeeItems.forEach(function(item) {
    item.onclick = function() {
      alert("你点击了： " + this.textContent);
    };
  });
  const specialEmployee = document.getElementById("special-employee");
  if (specialEmployee) {
    specialEmployee.addEventListener("change", function() {
      console.log("特殊员工已更改");
    });
  }
  employeeItems.forEach(function(item) {
    item.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; 
    };
  });
  employeeItems.forEach(function(item) {
    item.onmouseout = function() {
      this.style.backgroundColor = "";     
    };
  });

  employeeItems.forEach(function(item) {
    item.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; 
    };
  });

  employeeItems.forEach(function(item) {
    item.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; 
    };
  });
});